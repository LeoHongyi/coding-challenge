import {
  generateMyLiquidity,
  generateUniqueId,
  getRandomAPR,
  getRandomPoolLiquidity,
  getShuffledArr,
  allTokens,
  getRandomIdInit,
  getRandomPoolLiquidityInit,
  getRandomAPRInit,
  getRandomMyLiquidityInit,
} from './../utils/index';
import { PoolsData } from '../components/pools-list';
import { makeAutoObservable } from 'mobx';
import { Asset } from '@chain-registry/types';
import { AssetStore } from './AssetStore';

export class PoolStore {
  poolsData: PoolsData[] = [];
  assetStore: AssetStore;
  constructor(assetStore: AssetStore) {
    this.assetStore = assetStore;
    makeAutoObservable(this);
    this.loadPoolData();
  }
  loadPoolData() {
    const tokensAll = allTokens(this.assetStore.assets);
    const poolOptionToken1 = getShuffledArr([...tokensAll]);
    const poolOptionToken2 = getShuffledArr([...tokensAll]).filter(
      (v, i) => v !== poolOptionToken1[i],
    );

    const getDefaultData = [...Array(4)].fill(undefined).map((_, i) => ({
      id: getRandomIdInit[i],
      token1: poolOptionToken1[i],
      token2: poolOptionToken2[i],
      poolLiquidity: getRandomPoolLiquidityInit[i],
      apr: getRandomAPRInit[i],
      myLiquidity: getRandomMyLiquidityInit[i],
      myBoundedAmount: getRandomMyLiquidityInit[i],
      longestDaysUnbonding: Math.random() < 0.5,
    }));
    this.poolsData = getDefaultData;

    // console.log("getRandomAPR", getDefaultData);
    // setPoolsData(getDefaultData);
  }
  addPool(asset1: Asset, asset2: Asset) {
    this.poolsData.push({
      id: generateUniqueId(),
      token1: { name: asset1.name, imgSrc: asset1.logo_URIs.png },
      token2: { name: asset2.name, imgSrc: asset2.logo_URIs.png },
      poolLiquidity: getRandomPoolLiquidity(),
      apr: getRandomAPR(),
      myLiquidity: generateMyLiquidity(),
      myBoundedAmount: generateMyLiquidity(),
      longestDaysUnbonding: Math.random() < 0.5,
    });
    this.assetStore.removeAsset(asset1);
    this.assetStore.removeAsset(asset2);
  }
}
