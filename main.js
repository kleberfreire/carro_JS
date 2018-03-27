(function($) {
    'use strict';
    var app;
    app = (function() {
        return {
            init: function() {
                this.initEvents();
            },
            initEvents: function initEvents() {
                $('[data-js="form-carro"]').on('submit', this.handleSubmit);
            },
            handleSubmit: function handleSubmit(event) {
                event.preventDefault();
                var $divButton = $('[data-js="button"]')
                var $tableCar = $('[data-js="tabela-carro"]').get();
                $tableCar.appendChild(app.createNewCar());
                app.clearForm();
                
            },
            createNewCar: function createNewCar() {
                var $fragment = document.createDocumentFragment();
                var $tr = document.createElement('tr');
                var $td = document.createElement('td');
                var $tdImage = document.createElement('td');
                var $image = document.createElement('img');
                var $tdModelo = document.createElement('td');
                var $tdAno = document.createElement('td');
                var $tdPlaca = document.createElement('td');
                var $tdCor = document.createElement('td');
                $image.setAttribute('src', $('[data-js="img-carro"]').get().value);
                $tdImage.appendChild($image);
                $tdModelo.textContent = $('[data-js="marca-carro"]').get().value;
                $tdAno.textContent = $('[data-js="ano-carro"]').get().value;
                $tdPlaca.textContent = $('[data-js="placa-carro"]').get().value;
                $tdCor.textContent = $('[data-js="cor-carro"]').get().value;
                $tr.setAttribute('data-js', 'carros-lista');
                $tr.appendChild($tdImage);
                $tr.appendChild($tdModelo);
                $tr.appendChild($tdAno);
                $tr.appendChild($tdPlaca);
                $tr.appendChild($tdCor);
                var $divButton = $('[data-js="button"]').get();
                if (!$divButton.hasChildNodes()) this.createButtonEdit();
                return $fragment.appendChild($tr);
            },
        
            createButtonEdit: function createButtonEdit() {
                var $divButton = $('[data-js="button"]').get();
                var $buttonEdit = document.createElement('button');
                $buttonEdit.setAttribute('data-js', 'button-edit');
                $divButton.appendChild($buttonEdit);
                $('[data-js="button-edit"]').get().textContent = 'EDIT';
                $('[data-js="button-edit"]').on('click', app.handlebuttonEdit);
            },
            createButtonDelete: function createButtonDelete() {
                var $divButton = $('[data-js="button"]').get();
                var $buttonDelete = document.createElement('button');
                var $buttonSave = document.createElement('button');
                $buttonDelete.setAttribute('data-js', 'button-delete');
                $buttonSave.setAttribute('data-js', 'button-save');
                $divButton.appendChild($buttonDelete);
                $divButton.appendChild($buttonSave);
                $('[data-js="button-delete"]').get().textContent = 'DELETE';
                $('[data-js="button-delete"]').on('click', app.handlebuttonDelete);
                $('[data-js="button-save"]').get().textContent = 'SAVE';
                $('[data-js="button-save"]').on('click', app.handlebuttonSave);
            },
            handlebuttonEdit: function handlebuttonEdit(event) {
                event.preventDefault();
                var $buttonCheck = $('[data-js="checkall"]').get();
                if ($buttonCheck === undefined) {
                    app.createColSelect();
                    app.createButtonDelete();
                    app.EnableDisabledButton('[data-js="submit-carro"]');
                    app.EnableDisabledButton('[data-js="button-edit"]');
                }
            },
            handlebuttonDelete: function handlebuttonDelete() {
                var $trChecked = $('[data-js="carros-lista"]');
                $trChecked.forEach(function(item, index) {
                    if ($trChecked.get(index).lastElementChild.firstElementChild.checked === true) {
                        $trChecked.get(index).remove(index);
                    };
                });
            },
            EnableDisabledButton: function EnableDisabledButton(queryButton) {
                if($(queryButton).get().hasAttribute('disabled')){
                    $(queryButton).get().removeAttribute('disabled','disabled');
                }else{
                    $(queryButton).get().setAttribute('disabled','disabled');
                }
            },

            removerButton: function removerButton(queryButton){
                $(queryButton).get().remove()
            },

            handlebuttonSave: function handlebuttonSave() {
                app.EnableDisabledButton('[data-js="submit-carro"]');
                app.removerButton('[data-js="button-delete"]');
                app.removerButton('[data-js="button-save"]');
                app.EnableDisabledButton('[data-js="button-edit"]');
                app.removerCheck();
                if(!$('[data-js="tabela-carro"]').get().hasChildNodes())
                    app.removerButton('[data-js="button-edit"]');
            },
            handleCheckAll: function handleCheckAll(event) {
                var $buttonCheckAll = $('[data-js="checkall"]').get();
                var $buttonCheck = $('[data-js="check"]');
                $buttonCheck.forEach(function(item, index) {
                    var $estadoBollean = $buttonCheckAll.checked
                    $buttonCheck.get(index).checked = $estadoBollean;
                });
            },
            createColSelect: function createColSelect() {
                var $fragment = document.createDocumentFragment();
                var $tdCarro = $('[data-js="carros-lista"]');
                var $thTitulo = $('[data-js="titulo-table"]');
                var inputCheckAll = '<th><input type="checkbox" data-js="checkall"></th>';
                $thTitulo.get().firstElementChild.insertAdjacentHTML('beforeend', inputCheckAll);
                $tdCarro.forEach(function(item, index) {
                    var inputCheck = '<td><input type="checkbox" data-js="check"></td>';
                    $tdCarro.get(index).insertAdjacentHTML('beforeend', inputCheck);
                });
                var $buttonCheckAll = $('[data-js="checkall"]');
                $('[data-js="checkall"]').on('click', app.handleCheckAll);
            },

            removerCheck:function removerCheck(){
                var $trChecked = $('[data-js="carros-lista"]');
                var $trCheckedAll = $('[data-js="checkall"]').get().parentNode;
                $trCheckedAll.remove()
                $trChecked.forEach(function(item, index) {
                   $trChecked.get(index).lastElementChild.remove();             
                });
            },
            clearForm: function clearForm() {
                this.inputsForm('');
            },
            inputsForm: function inputsForm(param) {
                var $inputsText = $('input');
                $inputsText.forEach(function(item, index) {
                    item.value = param;
                });
            }
        }
    })();
    app.init()
})(window.DOM);