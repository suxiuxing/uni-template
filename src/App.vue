<script setup lang="ts">
import { onHide, onLaunch, onShow } from '@dcloudio/uni-app';
import { focusManager, onlineManager } from '@tanstack/vue-query';
import 'abortcontroller-polyfill/dist/abortcontroller-polyfill-only';

uni.getNetworkType({
  success: ({ networkType }) => {
    onlineManager.setOnline(networkType !== 'none');
  },
});

uni.onNetworkStatusChange(({ isConnected, networkType }) => {
  onlineManager.setOnline(isConnected != null ? isConnected : networkType !== 'none');
});

onLaunch(() => {
  console.log('App Launch');
});
onShow(() => {
  console.log('App Show');

  focusManager.setFocused(true);
});
onHide(() => {
  console.log('App Hide');

  focusManager.setFocused(false);
});
</script>

<style src="@/styles/global.scss"></style>
