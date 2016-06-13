export function initialize(instance) {
  let pusherService = instance.__container__.lookup('service:pusher');
  pusherService.setup('test-stub-key');
}

export default {
  name: 'ember-pusher',
  initialize: initialize
};
