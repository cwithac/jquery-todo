$( () => {

  //Page Load Inovation
  app.loadContent();

}); //

//Element Collection/Generating
const $container = $('<section/>').attr('id', 'container');
const $h1Title = $('<h1>To Do List<i class="fa fa-plus-square" aria-hidden="true"></i></h1>');
const $input = $('<input/>').attr('type', 'text').attr('placeholder', 'Add New To Do');
const $ul = $('<ul/>');

//APP Object
const app = {
  loadContent() {
    $('body').append($container);
    $container.append($h1Title, $input, $ul);
    // this.templateList(); //Disabled, used for initial build of template <li>
    this.intitFunctionality();
  },
  intitFunctionality() {
    this.strikethrough();
    this.deleteItem();
    this.addItem();
  },
  templateList() {
    //Disabled, used for initial build of template <li>
    const $initialList = ['First', 'Second', 'Third'];
    $ul.each(function(i){
      for (let i = 0; i < $initialList.length; i++) {
        $(this).append('<li><span><i class="fa fa-minus-square" aria-hidden="true"></i></span> ' + $initialList[i] + '</li>');
      }
    });
  },
  strikethrough() {
    $('ul').on('click', 'li', (e) => {
      $(e.currentTarget).toggleClass('strikethrough');
    });
  },
  deleteItem(){
    $('ul').on('click', 'span', (e) => {
      e.stopPropagation();
      $(e.currentTarget).parent().fadeOut(500, () => {
        $(e.currentTarget).parent().remove();
      });
    })
  },
  addItem() {
    $input.on('keypress', (e) => {
      if (e.which === 13) {
        let $valueText = $(e.currentTarget).val();
        $ul.append('<li><span><i class="fa fa-minus-square" aria-hidden="true"></i></span> ' + $valueText + '</li>');
        $(e.currentTarget).val('');
      }
    });
  }
};
