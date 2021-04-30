// Variaveis criadas
var tela = 0;
var altura = 40
var largura = 140
var base = 350
var menu = 122
var botao1 = 127
var botao2 = 185
var botao3 = 245
var controleMouse= false
var tempo = 1860;


//Setup para exportar as imagens para o jogo e definir o frameRate do contador regressivo
function setup() {
  createCanvas(500, 375);
  img = loadImage('CAPA JOGO.png');
  img1 = loadImage('tela_ajuda.png');
  img2 = loadImage('tela_creditos.png')
  img3 = loadImage('tela_niveis.png')
  img4 = loadImage('GAME_OVER.png')
  img5 = loadImage('PARABENS.png')
  aluno = loadImage('foto_aluno.jpg');
  prof = loadImage('dede.jfif');
  frameRate(60);
}


// Inicio de desenvolvimento das telas do jogo
function draw() {

// Tela do menu principal do Jogo
  if(tela == 0){
    background(img);
    if(mouseIsPressed == false){
      controleMouse = false
    }
    if( controleMouse == false){
      if(mouseX > menu && mouseX < menu + largura && mouseY > botao1 && mouseY < botao1 + altura){
        rect(menu, botao1, largura, altura, 20)
        noFill()
        stroke('white')
        strokeWeight(4);
        if(mouseIsPressed){
          tela = 1
          controleMouse = true
        }
      }
  
      if(mouseX > menu && mouseX < menu + largura && mouseY > botao2 && mouseY < botao2 + altura){
        rect(menu, botao2, largura, altura, 20)
        noFill()
        stroke('white')
        strokeWeight(4);
        if(mouseIsPressed){
          tela = 2
          controleMouse = true
        }
      }
  
      if(mouseX > menu && mouseX < menu + largura && mouseY > botao3 && mouseY < botao3 + altura && tela == 0){
        rect(menu, botao3, largura, altura, 20)
        noFill()
        stroke('white')
        strokeWeight(4);
        if(mouseIsPressed){
          tela = 3
          controleMouse = true
        }
      }
    }
  }
// Tela de preparação para o Jogo
  if(tela == 1){
    background(img3)
    fill(200,0,0);
    
    textSize(25);
    text('ESTÁ PREPARADO(A)?', 120, 130);
    fill(0,0,0);
    
    textSize(20);
    text('Sim', 130, 220);
    text('Não', 300, 220);
    
    if(mouseIsPressed == false){
      controleMouse = false
    }
    if( controleMouse == false){
      if(mouseX > 290 && mouseX < 350 && mouseY > 200 && mouseY < 225){
        textSize(20)
        rect(286, 198, 60, 30, 20);
        text('Não', 300, 220);
        if(mouseIsPressed){
          tela = 0
          controleMouse = true
        }
      }
      if(mouseX > 120 && mouseX < 170 && mouseY > 200 && mouseY < 225){
        textSize(20);
        rect(116, 198, 60, 30, 20);
        text('Sim', 130, 220);
        if(mouseIsPressed){
          tela = 1.11
          controleMouse = true
        }
      }
    }
  }
    
//Tela de Instruções
  if(tela == 2){
    background(img1);
    textSize(20);
    text('O jogo consiste em acertar o valor da', 70, 130)
    text('expressão númerica da questão dada', 70, 160)
    text('antes que a contagem regressiva acabe.', 70, 190);
    text('Cada resposta certa tem o valor de', 70, 220);
    text('10 pontos que serão acumulados durante', 70, 250);
    text('o jogo.', 70, 280);
    fill(0,0,0)
    textSize(17)
    text(' < Voltar', 60, 80);
    fill(0,0,0);
    
    if(mouseIsPressed == false){
      controleMouse = false
    }
    if( controleMouse == false){
      if(mouseX > 60 && mouseX < 120 && mouseY > 65 && mouseY < 95){
        rect(55, 60, 80, 30, 20)
        text(' < Voltar', 60, 80);
        if(mouseIsPressed){
          tela = 0
          controleMouse = true
        }
      }
    }
  }
//Tela de Créditos
  if(tela == 3){
    background(img2);
    textSize(18);
    fill(0,0,0)
    text('Francisco Gomes', 190, 130);
    text('Graduando de C&T',190, 160);
    text('José Luiz Soares',190, 230);
    text('Professor de Matemática',190, 260);
    
    textSize(17)
    text(' < Voltar', 60, 80);
    fill(0,0,0);textSize(17)
    
    
    image(aluno, 100, 100, 80, 80);
    image(prof, 100, 200, 80, 80);
    if(mouseIsPressed == false){
      controleMouse = false
    }
    if( controleMouse == false){
      if(mouseX > 60 && mouseX < 120 && mouseY > 65 && mouseY < 95){
      rect(55, 60, 80, 30, 20)
      text(' < Voltar', 60, 80);
        if(mouseIsPressed){
          tela = 0
        }
      }
    }
  }
// Telas 1.11 à 1.15: Fases do Jogo
  if(tela == 1.11){
    background(img3);
    textSize(18);
    fill(0,0,0)
    text('Resolva a expressão abaixo:', 130, 130);
    fill(255,255,255)
    rect(130, 150, 230, 100)
    fill(0,0,0)
    textSize(25)
    text('(2+3)*2 = ?',190,200)
    textSize(20)
    text(int(tempo/60),400,80)
    text('10', 160, 300)
    text('20', 310, 300)
    if(mouseIsPressed == false){
      controleMouse = false
    }
    if( controleMouse == false){
      if(mouseX > 140 && mouseX < 200 && mouseY > 278 && mouseY < 308 && tela == 1.11){
        rect(140, 278, 60, 30, 20)
        text('10',160,300);
        if(mouseIsPressed){
          tela = 1.12
          controleMouse = true
        }
      }
      if(mouseX > 290 && mouseX < 350 && mouseY > 278 && mouseY < 308){
        rect(290, 278, 60, 30, 20)
        text('20',310,300);
        if(mouseIsPressed){
          tela = 5.1
        }
      }
      tempo = tempo - 1
      if(tempo <= 0){
        background(img4);
        textSize(20)
        text('Resultado',200,310)
        if(mouseX > 195 && mouseX < 300 && mouseY > 290 && mouseY < 320){
          rect(190, 288, 110, 30, 20)
          text('Resultado',200,310);
          if(mouseIsPressed){
            tela = 1.21
          }
        }
      }
    
      textSize(17)
      text(' < Voltar', 60, 80);
      fill(0,0,0);
      if(mouseX > 60 && mouseX < 120 && mouseY > 65 && mouseY < 95){
        rect(55, 60, 80, 30, 20)
        text(' < Voltar', 60, 80);
        if(mouseIsPressed){
          tela = 0
          tempo = 1860
        }
      }
    }
  }
  
  if(tela == 1.12){
    background(img3);
    textSize(18);
    fill(0,0,0)
    text('Resolva a expressão abaixo:', 130, 130);
    fill(255,255,255)
    rect(130, 150, 230, 100)
    fill(0,0,0)
    textSize(25)
    text('(5+5)/2 = ?',190,200)
    textSize(20)
    text(int(tempo/60),400,80)
    text('20', 160, 300)
    text('05', 310, 300)
    if(mouseIsPressed == false){
      controleMouse = false
    }
    if( controleMouse == false){
      if(mouseX > 141 && mouseX < 201 && mouseY > 278 && mouseY < 308){
        rect(140, 278, 60, 30, 20)
        text('20',160,300);
        if(mouseIsPressed){
          tela = 5.2
        }
      }
      if(mouseX > 290 && mouseX < 350 && mouseY > 278 && mouseY < 308){
        rect(290, 278, 60, 30, 20)
        text('05',310,300);
        if(mouseIsPressed){
          tela = 1.13
          controleMouse = true
        }
      }
      tempo = tempo - 1
      if(tempo <= 0){
        background(img4);
        textSize(20)
        text('Resultado',200,310)
        if(mouseX > 195 && mouseX < 300 && mouseY > 290 && mouseY < 320){
          rect(190, 288, 110, 30, 20)
          text('Resultado',200,310);
          if(mouseIsPressed){
            tela = 1.22
          }
        }
      }
    
      textSize(17)
      text(' < Voltar', 60, 80);
      fill(0,0,0);
      if(mouseX > 60 && mouseX < 120 && mouseY > 65 && mouseY < 95){
        rect(55, 60, 80, 30, 20)
        text(' < Voltar', 60, 80);
        if(mouseIsPressed){
          tela = 0
          tempo = 1860
        }
      }
    }
  }
  if(tela == 1.13){
    background(img3);
    textSize(18);
    fill(0,0,0)
    text('Resolva a expressão abaixo:', 130, 130);
    fill(255,255,255)
    rect(130, 150, 230, 100)
    fill(0,0,0)
    textSize(25)
    text('(5+5)*(8/2) = ?',170,200)
    textSize(20)
    text(int(tempo/60),400,80)
    text('40', 160, 300)
    text('20', 310, 300)
    if(mouseIsPressed == false){
      controleMouse = false
    }
    if( controleMouse == false){
      if(mouseX > 140 && mouseX < 200 && mouseY > 278 && mouseY < 308){
        rect(140, 278, 60, 30, 20)
        text('40',160,300);
        if(mouseIsPressed){
          tela = 1.14
          controleMouse = true
        }
      }
      if(mouseX > 290 && mouseX < 350 && mouseY > 278 && mouseY < 308){
        rect(290, 278, 60, 30, 20)
        text('20',310,300);
        if(mouseIsPressed){
          tela = 5.3
        }
      }
      tempo = tempo - 1
      if(tempo <= 0){
        background(img4);
        textSize(20)
        text('Resultado',200,310)
        if(mouseX > 195 && mouseX < 300 && mouseY > 290 && mouseY < 320){
          rect(190, 288, 110, 30, 20)
          text('Resultado',200,310);
          if(mouseIsPressed){
            tela = 1.23
          }
        }
      }
    
      textSize(17)
      text(' < Voltar', 60, 80);
      fill(0,0,0);
      if(mouseX > 60 && mouseX < 120 && mouseY > 65 && mouseY < 95){
        rect(55, 60, 80, 30, 20)
        text(' < Voltar', 60, 80);
        if(mouseIsPressed){
          tela = 0
          tempo = 1860
        }
      }
    }
  }
  
  if(tela == 1.14){
    background(img3);
    textSize(18);
    fill(0,0,0)
    text('Resolva a expressão abaixo:', 130, 130);
    fill(255,255,255)
    rect(130, 150, 230, 100)
    fill(0,0,0)
    textSize(25)
    text('(7*3)+(9/3) = ?',170,200)
    textSize(20)
    text(int(tempo/60),400,80)
    text('36', 160, 300)
    text('24', 310, 300)
    if(mouseIsPressed == false){
      controleMouse = false
    }
    if( controleMouse == false){
      if(mouseX > 140 && mouseX < 200 && mouseY > 278 && mouseY < 308){
        rect(140, 278, 60, 30, 20)
        text('36',160,300);
        if(mouseIsPressed){
          tela = 5.4
          controleMouse = true
        }
      }
      if(mouseX > 290 && mouseX < 350 && mouseY > 278 && mouseY < 308){
        rect(290, 278, 60, 30, 20)
        text('24',310,300);
        if(mouseIsPressed){
          tela = 1.15
          controleMouse = true
        }
      }
      tempo = tempo - 1
      if(tempo <= 0){
        background(img4);
        textSize(20)
        text('Resultado',200,310)
        if(mouseX > 195 && mouseX < 300 && mouseY > 290 && mouseY < 320){
          rect(190, 288, 110, 30, 20)
          text('Resultado',200,310);
          if(mouseIsPressed){
            tela = 1.24
          }
        }
      }
    
      textSize(17)
      text(' < Voltar', 60, 80);
      fill(0,0,0);
      if(mouseX > 60 && mouseX < 120 && mouseY > 65 && mouseY < 95){
        rect(55, 60, 80, 30, 20)
        text(' < Voltar', 60, 80);
        if(mouseIsPressed){
          tela = 0
          tempo = 1860
        }
      }
    }
  }
  
  if(tela == 1.15){
    background(img3);
    textSize(18);
    fill(0,0,0)
    text('Resolva a expressão abaixo:', 130, 130);
    fill(255,255,255)
    rect(130, 150, 230, 100)
    fill(0,0,0)
    textSize(25)
    text('x = (24+8)/2',170,175)
    text('y = 25/(23+2)*3',155,210)
    text('x * y = ?',200,245)
    textSize(20)
    text(int(tempo/60),400,80)
    text('48', 160, 300)
    text('16', 310, 300)
    if(mouseIsPressed == false){
      controleMouse = false
    }
    if( controleMouse == false){
      if(mouseX > 140 && mouseX < 200 && mouseY > 278 && mouseY < 308){
        rect(140, 278, 60, 30, 20)
        text('48',160,300);
        if(mouseIsPressed){
          tela = 6
          controleMouse = true
        }
      }
      if(mouseX > 290 && mouseX < 350 && mouseY > 278 && mouseY < 308){
        rect(290, 278, 60, 30, 20)
        text('16',310,300);
        if(mouseIsPressed){
          tela = 5.5
          controleMouse = true
        }
      }
      tempo = tempo - 1
      if(tempo <= 0){
        background(img4);
        textSize(20)
        text('Resultado',200,310)
        if(mouseX > 195 && mouseX < 300 && mouseY > 290 && mouseY < 320){
          rect(190, 288, 110, 30, 20)
          text('Resultado',200,310);
          if(mouseIsPressed){
            tela = 1.25
          }
        }
      }
    
      textSize(17)
      text(' < Voltar', 60, 80);
      fill(0,0,0);
      if(mouseX > 60 && mouseX < 120 && mouseY > 65 && mouseY < 95){
        rect(55, 60, 80, 30, 20)
        text(' < Voltar', 60, 80);
        if(mouseIsPressed){
          tela = 0
          tempo = 1860
        }
      }
    }
  }
  
// Telas 1.21 à 1.26: Todas as Pontuações Finais
  if(tela == 1.21){
    background(img3);
    textSize(18);
    fill(0,0,0)
    text('RESULTADO', 190, 130);
    text('Sua Pontuação:', 130, 180);
    text('0 pontos', 300, 180);
    textSize(17)
    text(' < Voltar', 60, 80);
    fill(0,0,0);
    if(mouseX > 60 && mouseX < 120 && mouseY > 65 && mouseY < 95){
      rect(55, 60, 80, 30, 20)
      text(' < Voltar', 60, 80);
      if(mouseIsPressed){
        tela = 0
        tempo = 1860
      }
    }
  }
  
  if(tela == 1.22){
    background(img3);
    textSize(18);
    fill(0,0,0)
    text('RESULTADO', 190, 130);text('Sua Pontuação:', 130, 180);
    text('10 pontos', 300, 180);
    textSize(17)
    text(' < Voltar', 60, 80);
    fill(0,0,0);
    if(mouseX > 60 && mouseX < 120 && mouseY > 65 && mouseY < 95){
      rect(55, 60, 80, 30, 20)
      text(' < Voltar', 60, 80);
      if(mouseIsPressed){
        tela = 0
        tempo = 1860
      }
    }
  }
  
  if(tela == 1.23){
    background(img3);
    textSize(18);
    fill(0,0,0)
    text('RESULTADO', 190, 130);
    text('Sua Pontuação:', 130, 180);
    text('20 pontos', 300, 180);
    textSize(17)
    text(' < Voltar', 60, 80);
    fill(0,0,0);
    if(mouseX > 60 && mouseX < 120 && mouseY > 65 && mouseY < 95){
      rect(55, 60, 80, 30, 20)
      text(' < Voltar', 60, 80);
      if(mouseIsPressed){
        tela = 0
        tempo = 1860
      }
    }
  }
  
  if(tela == 1.24){
    background(img3);
    textSize(18);
    fill(0,0,0)
    text('RESULTADO', 190, 130);
    text('Sua Pontuação:', 130, 180);
    text('30 pontos', 300, 180);
    textSize(17)
    text(' < Voltar', 60, 80);
    fill(0,0,0);
    if(mouseX > 60 && mouseX < 120 && mouseY > 65 && mouseY < 95){
      rect(55, 60, 80, 30, 20)
      text(' < Voltar', 60, 80);
      if(mouseIsPressed){
        tela = 0
        tempo = 1860
      }
    }
  }
  
  if(tela == 1.25){
    background(img3);
    textSize(18);
    fill(0,0,0)
    text('RESULTADO', 190, 130);
    text('Sua Pontuação:', 130, 180);
    text('40 pontos', 300, 180);
    textSize(17)
    text(' < Voltar', 60, 80);
    fill(0,0,0);
    if(mouseX > 60 && mouseX < 120 && mouseY > 65 && mouseY < 95){
      rect(55, 60, 80, 30, 20)
      text(' < Voltar', 60, 80);
      if(mouseIsPressed){
        tela = 0
        tempo = 1860
      }
    }
  }
  
  if(tela == 1.26){
    background(img3);
    textSize(18);
    fill(0,0,0)
    text('RESULTADO', 190, 130);
    text('Sua Pontuação:', 130, 180);
    text('50 pontos', 300, 180);
    textSize(20)
    text('Créditos',200,310)
    if(mouseIsPressed == false){
      controleMouse = false
    }
    if( controleMouse == false){
      if(mouseX > 187 && mouseX < 300 && mouseY > 290 && mouseY < 320){
        rect(182, 288, 110, 30, 20)
        text('Créditos',200,310);
        if(mouseIsPressed){
          tela = 3
          tempo = 1860
          controleMouse = true
        }
      }
    }
  }
  
  
//Telas 5.1 à 5.6: Todos os Game Over's do Jogo
  if(tela == 5.1){
    background(img4);
    textSize(20)
    text('Resultado',200,310)
    if(mouseX > 195 && mouseX < 300 && mouseY > 290 && mouseY < 320){
      rect(190, 288, 110, 30, 20)
      text('Resultado',200,310);
      if(mouseIsPressed){
        tela = 1.21
      }
    }
  }
  
  if(tela == 5.2){
    background(img4);
    textSize(20)
    text('Resultado',200,310)
    if(mouseX > 195 && mouseX < 300 && mouseY > 290 && mouseY < 320){
      rect(190, 288, 110, 30, 20)
      text('Resultado',200,310);
      if(mouseIsPressed){
        tela = 1.22
      }
    }
  }
  
  if(tela == 5.3){
    background(img4);
    textSize(20)
    text('Resultado',200,310)
    if(mouseX > 195 && mouseX < 300 && mouseY > 290 && mouseY < 320){
      rect(190, 288, 110, 30, 20)
      text('Resultado',200,310);
      if(mouseIsPressed){
        tela = 1.23
      }
    }
  }
  
  if(tela == 5.4){
    background(img4);
    textSize(20)
    text('Resultado',200,310)
    if(mouseX > 195 && mouseX < 300 && mouseY > 290 && mouseY < 320){
      rect(190, 288, 110, 30, 20)
      text('Resultado',200,310);
      if(mouseIsPressed){
        tela = 1.24
      }
    }
  }
  
  if(tela == 5.5){
    background(img4);
    textSize(20)
    text('Resultado',200,310)
    if(mouseX > 195 && mouseX < 300 && mouseY > 290 && mouseY < 320){
      rect(190, 288, 110, 30, 20)
      text('Resultado',200,310);
      if(mouseIsPressed){
        tela = 1.25
      }
    }
  }
  if(tela == 5.6){
    background(img4);
    textSize(20)
    text('Resultado',200,310)
    if(mouseX > 195 && mouseX < 300 && mouseY > 290 && mouseY < 320){
      rect(190, 288, 110, 30, 20)
      text('Resultado',200,310);
      if(mouseIsPressed){
        tela = 1.26
      }
    }
  }
  
  //Tela de Jogo Zerado com sucesso.
  if(tela == 6){
    background(img5);
    textSize(20)
    text('Resultado',200,330)
    if(mouseX > 195 && mouseX < 300 && mouseY > 310 && mouseY < 340){
      rect(190, 308, 110, 30, 20)
      text('Resultado',200,330);
      if(mouseIsPressed){
        tela = 1.26
        controleMouse = true
      }
    }
  }
}