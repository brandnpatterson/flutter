/*
  Delete post
*/

var deleteSelectedPost = {
  init: function () {
    this.cacheDOM();
    this.bindEvents();
  },
  cacheDOM: function () {
    this.deleteFlutterPost = document.querySelectorAll('.delete-flutter');
  },
  bindEvents: function () {
    for (var i = 0; i < this.deleteFlutterPost.length; i++) {
      this.deleteFlutterPost[i].addEventListener('click', this.deleteSelectedPost.bind(this));
    }
  },
  deleteSelectedPost: function (event) {
    event.target.closest('.post').remove();
  },

}
deleteSelectedPost.init();
