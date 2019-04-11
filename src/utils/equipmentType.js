import Router from '@/router/router';
const _isMobile = () => {
  return navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
};
const equipmentType = () => {
  if (_isMobile()) {
    Router.replace('/mobile')
  } else {
    Router.replace('/pc')
  }
};

export default equipmentType;
