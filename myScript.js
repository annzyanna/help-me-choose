
$(function() {
   $('.resultSection').hide()

   var add_option = function() {
     $('.inputs').append('<input></input>')
   }
   $('.addOption').click(add_option)

   var options = []
  var submit = function() {
    $('.inputSection').hide()
    $('.resultSection').css('display', 'flex')
    $('input').each(function() {
      options.push($(this).val())
    })
    var winner = options[Math.floor(Math.random() * options.length)]
    console.log(winner)
    $('.title').text("The winner is:")
    $('.resultSection').text(winner)
  }
  $('.submit').click(submit)
})
