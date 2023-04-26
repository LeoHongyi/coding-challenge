import { PoolStore } from './PoolStore';
import { AssetStore } from './AssetStore';
import { asset_list } from '@chain-registry/osmosis';
import { makeAutoObservable } from 'mobx';

export class RootStore {
  poolStore: PoolStore;
  assetStore: AssetStore;
  constructor() {
    this.assetStore = new AssetStore();
    this.assetStore.setAssetList(asset_list.assets);
    this.poolStore = new PoolStore(this.assetStore);
  }
}

export const rootStore = new RootStore();
