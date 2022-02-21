$(document).ready(function () {
    $('#rules_btn').click(function () {
        $('#rules').hide();
        $('#accueil').show();
    });
});


$(document).ready(function () {
    $('#start').click(function () {
        var username = $('#username').val()
        $('#accueil').hide();
        $('footer').hide();
        $('#combat').show();
        $('#compteur').show();
        $('#username_show').val(username);
    });
});

$(document).ready(function () {
    var victory = 0;
    var defeat = 0;
    // sur l'action click d'un des bouton de la classe btn_choice je déclare une fonction
    $('.btn_choice').click(function () {

        // On récupére l'id du bouton sur lequel on clique
        var img = $(this).attr('id');
        // On modifie l'attribut SRC de l'id de l'image
        $('#switch-img').attr('src', 'assets/img/' + img + '.gif');

        // je déclare une variable choice qui reprends l'ID des boutons 
        var choice = $(this).attr('id');
        // Si le choix est égale à l'ID gardevoir
        if (choice == 'symbios') {
            // Déclaration variable pkmn et j'attribue 1 à la valeur pkmn pour l'ID gardevoir
            var pkmnUser = 1;

        } else if (choice == 'wushours') {
            // Je change la valeur de la variable à 2 si on clic sur le bouton d'id gallame
            pkmnUser = 2;
            // Je change la valeur de la variable à 3 si on clic sur le bouton d'id zoroark
        } else if (choice == 'gigalith') {
            pkmnUser = 3;
        } else if (choice == 'bekaglaçon') {
            pkmnUser = 4;
        } else if (choice == 'corvaillus') {
            pkmnUser = 5;
        } else if (choice == 'lumivole') {
            pkmnUser = 6;
        }

        // On récupére l'id du bouton sur lequel on clique
        var img = $(this).attr('id');
        // On modifie l'attribut SRC de l'id de l'image
        $('#switch-img').attr('src', 'assets/img/' + img + '.gif');

        var minNumber = 1;
        var maxNumber = 6;
        // Nombre pour fixer les nombres aléatoires donc entre 1 et 3
        var pkmnIa = Math.floor(Math.random() * (maxNumber) + minNumber)
        if (pkmnUser == 6 && pkmnIa == 1) {
            victoire();
            $('#msg_result').show();
            victory++;
        } else if (pkmnIa == 6 && pkmnUser == 1) {
            perdu();
            defeat++;
        } else if (pkmnUser == pkmnIa) {
            egalité();
        } else if (pkmnUser < pkmnIa) {
            victoire();
            $('#msg_result').show();
            victory++;
        } else {
            perdu();
            defeat++;
        }

        // Switch image pour l'IA
        if (pkmnIa == 1) {
            $('#switch-img_ia').attr('src', 'assets/img/symbios2.gif');
        } else if (pkmnIa == 2) {
            $('#switch-img_ia').attr('src', 'assets/img/wushours.gif');
        } else if (pkmnIa == 3) {
            $('#switch-img_ia').attr('src', 'assets/img/gigalith.gif');
        } else if (pkmnIa == 4) {
            $('#switch-img_ia').attr('src', 'assets/img/bekaglaçon.gif');
        } else if (pkmnIa == 5) {
            $('#switch-img_ia').attr('src', 'assets/img/corvaillus.gif');
        } else if (pkmnIa == 6) {
            $('#switch-img_ia').attr('src', 'assets/img/lumivole2.gif');
        }


        var partieFinie = false
        // Mise a jour du score
        $('#compteur').text(victory + " - " + defeat);
        if (victory >= 6 || defeat >= 6) {
            if (victory > defeat) {
                partieFinie = true;
                messagefin = 'Vous avez gagné !';
            } else {
                partieFinie = true;
                messagefin = 'Vous avez perdu !';
            }

            swal({
                title: messagefin,
                text: 'Voulez-vous recommencer une partie ?',
                buttons: {
                    cancel: 'Arreter',
                    reset: {
                        text: 'Recommencer',
                        value: 'reset',
                    }
                }
            }).then((value) => {
                switch (value) {
                    case 'reset':
                        victory = 0;
                        defeat = 0;
                        $('#compteur').text(victory + " - " + defeat);
                        break;

                    default:
                        location.reload();
                }
            });
        }

    });
});

function victoire() {
    swal({
        title: 'Bien joué !',
        text: 'Vous avez gagné!',
    });
}

function perdu() {
    swal({
        title: "Tu as perdu",
        text: "Recommence",
    });
}

function egalité() {
    swal({
        title: "Egalité",
        text: 'Ce n\'était pas très efficace'
    });
}