import { makeAutoObservable } from 'mobx';
import { Asset } from '@chain-registry/types';

export class AssetStore {
  assets: Asset[] = [];
  constructor() {
    makeAutoObservable(this);
  }
  setAssetList(asset_list: Asset[]) {
    this.assets = asset_list;
  }

  addAsset(asset: Asset) {
    this.assets.push(asset);
  }

  updateAsset(asset: Asset) {
    const index = this.assets.findIndex((a) => a.name === asset.name);
    if (index <= -1) return;
    this.assets[index] = asset;
  }

  removeAsset(asset: Asset) {
    const index = this.assets.findIndex((a) => a.name === asset.name);
    if (index <= -1) return;
    this.assets.splice(index, 1);
  }

  filterAsset(asset: Asset) {
    return this.assets.filter((a) => a.name !== asset.name);
  }
}
