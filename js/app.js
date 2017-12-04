/**almacenamos el fondo en movimiento */
var fondoJuego;
var boton;
var flappy;
var cursores;

/**se inicializa a variable juego, con la medida del juego, y donde se mostrara(div del html) */
var juego = new Phaser.Game(370, 500, Phaser.CANVAS, 'bloque_juego');

/**creamos el estado principal del juego */
var estadoPrincipal = {

  /**preload cargara todos los recursos de nuestro juego */
  preload: function(){

    /**asignamos un color de fondo al juego 
    juego.stage.backgroundColor = '#000';*/

    /**crgamos la imagen de  fondo */
    juego.load.image('fondo', 'img/fondo.png');

    juego.load.spritesheet('pajaros', 'img/pajaros.png', 36, 26);

    /**cargamos al personaje a la escena 
    juego.load.image('pajaro', 'img/bird_orange_0.png');

    *cargamos al boton 
    juego.load.image('btn', 'img/button_play_normal.png');*/
  },


  /**se corre una vez que inicia el juego, mostramos en pantalla los recursos que cargamos en preload */
  create: function(){

    /**cargamos la imagen en la pantalla */
    fondoJuego = juego.add.tileSprite(0, 0, 370, 500, 'fondo');

    flappy = juego.add.sprite(100, 100, 'pajaros');

    flappy.frame = 1;
    flappy.animations.add('vuelo', [0,1,2], 10, true);

    /**crea todas las teclas del cursor: arriba, abajo ... */
    cursores = juego.input.keyboard.createCursorKeys();
    
    /**agregamos la imagen del personaje al juego(x,y,nombreSrite) 
    flappy = juego.add.sprite(juego.width/2, juego.height/2, 'pajaro');
    flappy.anchor.setTo(0.5);
    flappy.scale.setTo(2);

    *voltear imagen
     * flappy.scale.setTo(1,-1);
     * 
     * rotar sprite, valor positivo lo rota segun las manecillas del reloj
     * flappy.angle = 90;
     * 
     * teclaDerecha = juego.input.keyboard.addKey(Phaser.Keyboard.RIGHT);
     * 
     */
    



    /**anchor point = punto de poyo */
    /**
     * boton = juego.add.sprite(juego.width/2, juego.height/2, 'btn');
    <<alineamos el boton al centro en x e y >>
    boton.anchor.setTo(0.5, 0.5);
     */



  },

  /**animamos el juego */
  update: function(){

    /**cada vez que se actualice la escena, se vera como si corriera el fondo(como si se moviera)
    fondoJuego.tilePosition.x -= 1;
    *
    *rota imagen
    *flappy.angle += 2;
    */
    flappy.animations.play('vuelo');

    /**
     * isDown: acion cuando aprieto la tecla, isUp: detiene la accion 
     * if(teclaDerecha.isDown){
      flappy.position.x += 1;
    }*/
    //movimiento del personaje
    if(cursores.right.isDown){
      flappy.position.x +=1;
    }
    if (cursores.left.isDown) {
      flappy.position.x -= 1;
    }
    if (cursores.up.isDown) {
      flappy.position.y -= 1;
    }
    if (cursores.down.isDown) {
      flappy.position.y += 1;
    }

  }

};

/**primer parametro es el nombre con el cual nos referimos al estado, el segundo es el objeto */
juego.state.add('principal', estadoPrincipal);

/**iniciamos el juego con el estado por defecto */
juego.state.start('principal');