/*
  Delete post
*/

var deletePost = {
  init: function () {
    this.cacheDOM();
    this.bindEvents();
  },
  cacheDOM: function () {
    this.deleteFlutterPost = document.querySelectorAll('.delete-flutter');
  },
  bindEvents: function () {
    for (var i = 0; i < this.deleteFlutterPost.length; i++) {
      this.deleteFlutterPost[i].addEventListener('click', this.deletePost.bind(this));
    }
  },
  deletePost: function (event) {
    // currently only deletes from DOM
    event.target.closest('.post').remove();
  },

}
deletePost.init();
