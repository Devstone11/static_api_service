module.exports = {
  filter: function(array) {
    return array.filter(function(element) {
      return element.user_data.active === 1;
    })
  }
}
