import React, { useState, useEffect } from 'react';
import { rootStore } from '../store';
import Pools from '../components/pools-list';

export default function Index() {
  return (
    <>
      <Pools data={rootStore} />
    </>
  );
}
