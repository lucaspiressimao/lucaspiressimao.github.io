function gameSnake() {
    var linhas = 20;
    var colunas = 10;
    var direcao = 'd'; //c = cima / b = baixo / d = direita / e = esquerda
    var speed_base = 1000;
    var speed = 1000;
    var lin = 0
    var col = 0
    var fim = false;
    var pontos = 0;
    var objeto = null;
    var base = [];
    var colisao = false;
    var colisao_giro = false;
    var max_linhas = false;
    var a_, b_, c_, d_ = null;
    var numeroSorte = 0;
    var removerLinhas = [];
    var elemento_base = null;
    var elemento_anterior = null;
    var linhas_removidas = 0;
    var valor_modulo = 10;
    var prox_objeto = null;
    var objeto_temp = null;
    var temp = []
    var a_giro, b_giro, c_giro, d_giro = null;

    // #ff4000 *
    // #e60073 *
    // #3300cc * 
    // #0099cc *
    // #00b32d *
    // #e6ac00 *
    // #862d59

    // implementar z 
    var tipos = {
        't': {
            'sentido': 'b',
            'color': '#ff4000',
            'position':  {
                'a': null,
                'c': null,
                'b': null,
                'd': null
            },
            'girar': function() {
                if(this['position'].a != null 
                    && this['position'].b != null
                    && this['position'].c != null
                    && this['position'].d != null){
                if((this['position'].a.style.display != 'none')
                    && (this['position'].b.style.display != 'none')
                    && (this['position'].c.style.display != 'none')
                    && (this['position'].d.style.display != 'none')){
                    limpar(this);
                    var a_col, b_col, c_col, d_col = 0;
                    var s = '';
                    var a_col = +this['position'].a.getAttribute("data-coluna");
                    var b_col = +this['position'].b.getAttribute("data-coluna");
                    var c_col = +this['position'].c.getAttribute("data-coluna");
                    var d_col = +this['position'].d.getAttribute("data-coluna");

                    var b_lin = +this['position'].b.getAttribute("data-linha");
                
                    switch(this['sentido']){
                        case 'b':
                            b_lin -= 1;
                            s = 'e';
                            break;
                        case 'e':
                            b_col += 1;
                            s = 'c';
                            break;
                        case 'c':
                            b_lin += 1;
                            s = 'd';
                            break;
                        case 'd':
                            b_col -= 1;
                            s = 'b';
                            break;
                    }

                    c_giro = this['position'].d
                    d_giro = this['position'].a
                    a_giro = document.querySelector('[data-linha="' + b_lin + '"][data-coluna="' + b_col + '"]');
                    b_biro = this['position'].b
                    
                    verificaColisao();
                    
                    if(b_col < colunas && b_col >= 0 && b_lin < linhas && !colisao_giro){
                            this['sentido'] = s;
                            this['position'].c = c_giro;
                            this['position'].d = d_giro;
                            this['position'].a = a_giro;
                    }
                    this['position'].a.setAttribute('data-cor', this['color']);
                    this['position'].b.setAttribute('data-cor', this['color']);
                    this['position'].c.setAttribute('data-cor', this['color']);
                    this['position'].d.setAttribute('data-cor', this['color']);

                    colisao_giro = false;
                    pintar(this);
                }
            }
            },
            'criar': function() {
                this['sentido'] = 'b';
                this['position'].a = document.querySelector('[data-linha="-4"][data-coluna="3"]');
                this['position'].b = document.querySelector('[data-linha="-4"][data-coluna="4"]');
                this['position'].c = document.querySelector('[data-linha="-4"][data-coluna="5"]');
                this['position'].d = document.querySelector('[data-linha="-3"][data-coluna="4"]');
                this['position'].a.setAttribute('data-cor', this['color']);
                this['position'].b.setAttribute('data-cor', this['color']);
                this['position'].c.setAttribute('data-cor', this['color']);
                this['position'].d.setAttribute('data-cor', this['color']);
                pintar(this);
            },
            'criar_mini': function() {
                var a_prox = document.querySelector('[data-linha-prox="2"][data-coluna-prox="1"]');
                var b_prox = document.querySelector('[data-linha-prox="2"][data-coluna-prox="2"]');
                var c_prox = document.querySelector('[data-linha-prox="2"][data-coluna-prox="3"]');
                var d_prox = document.querySelector('[data-linha-prox="3"][data-coluna-prox="2"]');

                a_prox.style.backgroundColor = this['color'];
                a_prox.style.boxShadow = "inset 0px 0px 2px 2px rgba(0,0,0,0.5)";
                b_prox.style.backgroundColor = this['color'];
                b_prox.style.boxShadow = "inset 0px 0px 2px 2px rgba(0,0,0,0.5)";
                c_prox.style.backgroundColor = this['color'];
                c_prox.style.boxShadow = "inset 0px 0px 2px 2px rgba(0,0,0,0.5)";
                d_prox.style.backgroundColor = this['color'];
                d_prox.style.boxShadow = "inset 0px 0px 2px 2px rgba(0,0,0,0.5)";
            },
        },
        'i': {
            'sentido': 'b',
            'color': '#e60073',
            'position':  {
                'a': null,
                'c': null,
                'b': null,
                'd': null
            },
            'girar': function() {
                if(this['position'].a != null 
                    && this['position'].b != null
                    && this['position'].c != null
                    && this['position'].d != null){
                if((this['position'].a.style.display != 'none')
                    && (this['position'].b.style.display != 'none')
                    && (this['position'].c.style.display != 'none')
                    && (this['position'].d.style.display != 'none')){
                    limpar(this);
                    var s = '';
                    var a_col, b_col, d_col = 0;
                    var a_lin, b_lin, d_lin = 0;

                    a_col = +this['position'].a.getAttribute("data-coluna");
                    b_col = +this['position'].b.getAttribute("data-coluna");
                    d_col = +this['position'].d.getAttribute("data-coluna");

                    a_lin = +this['position'].a.getAttribute("data-linha");
                    b_lin = +this['position'].b.getAttribute("data-linha");
                    d_lin = +this['position'].d.getAttribute("data-linha");
                
                    switch(this['sentido']){
                        case 'l':
                            a_lin -= 2;
                            a_col += 2;
                            b_lin -= 1;
                            b_col += 1;
                            d_lin += 1;
                            d_col -= 1;
                            s = 'b';
                            break;
                        case 'b':
                            a_lin += 2;
                            a_col -= 2;
                            b_lin += 1;
                            b_col -= 1;
                            d_lin -= 1;
                            d_col += 1;
                            s = 'l';
                            break;
                    }

                    a_giro = document.querySelector('[data-linha="' + a_lin + '"][data-coluna="' + a_col + '"]');
                    b_giro = document.querySelector('[data-linha="' + b_lin + '"][data-coluna="' + b_col + '"]');
                    c_giro = this['position'].c
                    d_giro = document.querySelector('[data-linha="' + d_lin + '"][data-coluna="' + d_col + '"]');
                    
                    verificaColisao();
                    
                    if( (Math.max(a_lin, b_lin, d_lin) < linhas) && 
                        (Math.min(a_col, b_col, d_col) >= 0) && 
                        (Math.max(a_col, b_col, d_col) < colunas) &&
                        !colisao_giro){
                            this['sentido'] = s;
                            this['position'].a = a_giro;
                            this['position'].b = b_giro;
                            this['position'].d = d_giro;
                        }
                    this['position'].a.setAttribute('data-cor', this['color']);
                    this['position'].b.setAttribute('data-cor', this['color']);
                    this['position'].c.setAttribute('data-cor', this['color']);
                    this['position'].d.setAttribute('data-cor', this['color']);
                    colisao_giro = false;
                    pintar(this);
                }
            }
            },
            'criar': function() {
                this['sentido'] = 'b';
                this['position'].a = document.querySelector('[data-linha="-4"][data-coluna="5"]');
                this['position'].b = document.querySelector('[data-linha="-3"][data-coluna="5"]');
                this['position'].c = document.querySelector('[data-linha="-2"][data-coluna="5"]');
                this['position'].d = document.querySelector('[data-linha="-1"][data-coluna="5"]');
                this['position'].a.setAttribute('data-cor', this['color']);
                this['position'].b.setAttribute('data-cor', this['color']);
                this['position'].c.setAttribute('data-cor', this['color']);
                this['position'].d.setAttribute('data-cor', this['color']);
                pintar(this);
            },
            'criar_mini': function() {
                var a_prox = document.querySelector('[data-linha-prox="1"][data-coluna-prox="3"]');
                var b_prox = document.querySelector('[data-linha-prox="2"][data-coluna-prox="3"]');
                var c_prox = document.querySelector('[data-linha-prox="3"][data-coluna-prox="3"]');
                var d_prox = document.querySelector('[data-linha-prox="4"][data-coluna-prox="3"]');

                a_prox.style.backgroundColor = this['color'];
                a_prox.style.boxShadow = "inset 0px 0px 2px 2px rgba(0,0,0,0.5)";
                b_prox.style.backgroundColor = this['color'];
                b_prox.style.boxShadow = "inset 0px 0px 2px 2px rgba(0,0,0,0.5)";
                c_prox.style.backgroundColor = this['color'];
                c_prox.style.boxShadow = "inset 0px 0px 2px 2px rgba(0,0,0,0.5)";
                d_prox.style.backgroundColor = this['color'];
                d_prox.style.boxShadow = "inset 0px 0px 2px 2px rgba(0,0,0,0.5)";
            },
        },
        'q': {
            'sentido': 'b',
            'color': '#3300cc',
            'position':  {
                'a': null,
                'c': null,
                'b': null,
                'd': null
            },
            'girar': function() {
                if(this['position'].a != null 
                    && this['position'].b != null
                    && this['position'].c != null
                    && this['position'].d != null){
                if((this['position'].a.style.display != 'none')
                    && (this['position'].b.style.display != 'none')
                    && (this['position'].c.style.display != 'none')
                    && (this['position'].d.style.display != 'none')){
                    pintar(this);
                    colisao_giro = false;
                }
            }
            },
            'criar': function() {
                this['sentido'] = 'b';
                this['position'].a = document.querySelector('[data-linha="-4"][data-coluna="4"]');
                this['position'].b = document.querySelector('[data-linha="-4"][data-coluna="5"]');
                this['position'].c = document.querySelector('[data-linha="-3"][data-coluna="4"]');
                this['position'].d = document.querySelector('[data-linha="-3"][data-coluna="5"]');
                this['position'].a.setAttribute('data-cor', this['color']);
                this['position'].b.setAttribute('data-cor', this['color']);
                this['position'].c.setAttribute('data-cor', this['color']);
                this['position'].d.setAttribute('data-cor', this['color']);
                pintar(this);
            },
            'criar_mini': function() {
                var a_prox = document.querySelector('[data-linha-prox="2"][data-coluna-prox="2"]');
                var b_prox = document.querySelector('[data-linha-prox="2"][data-coluna-prox="3"]');
                var c_prox = document.querySelector('[data-linha-prox="3"][data-coluna-prox="2"]');
                var d_prox = document.querySelector('[data-linha-prox="3"][data-coluna-prox="3"]');

                a_prox.style.backgroundColor = this['color'];
                a_prox.style.boxShadow = "inset 0px 0px 2px 2px rgba(0,0,0,0.5)";
                b_prox.style.backgroundColor = this['color'];
                b_prox.style.boxShadow = "inset 0px 0px 2px 2px rgba(0,0,0,0.5)";
                c_prox.style.backgroundColor = this['color'];
                c_prox.style.boxShadow = "inset 0px 0px 2px 2px rgba(0,0,0,0.5)";
                d_prox.style.backgroundColor = this['color'];
                d_prox.style.boxShadow = "inset 0px 0px 2px 2px rgba(0,0,0,0.5)";
            },
        },
        'l': {
            'sentido': 'b',
            'color': '#0099cc',
            'position':  {
                'a': null,
                'c': null,
                'b': null,
                'd': null
            },
            'girar': function() {
                if(this['position'].a != null 
                    && this['position'].b != null
                    && this['position'].c != null
                    && this['position'].d != null){
                if((this['position'].a.style.display != 'none')
                    && (this['position'].b.style.display != 'none')
                    && (this['position'].c.style.display != 'none')
                    && (this['position'].d.style.display != 'none')){
                    limpar(this);
                    var s = '';
                    var a_col, b_col = 0;
                    var a_lin, b_lin = 0;

                    a_col = +this['position'].a.getAttribute("data-coluna");
                    b_col = +this['position'].b.getAttribute("data-coluna");
                    
                    a_lin = +this['position'].a.getAttribute("data-linha");
                    b_lin = +this['position'].b.getAttribute("data-linha");
                    
                    switch(this['sentido']){
                        case 'b':
                            a_lin += 2;
                            a_col += 2;
                            b_lin += 1;
                            b_col += 1;
                            s = 'e';
                            break;
                        case 'e':
                            a_lin += 2;
                            a_col -= 2;
                            b_lin += 1;
                            b_col -= 1;
                            s = 'c';
                            break;
                        case 'c':
                            a_lin -= 2;
                            a_col -= 2;
                            b_lin -= 1;
                            b_col -= 1;
                            s = 'd';
                            break;
                        case 'd':
                            a_lin -= 2;
                            a_col += 2;
                            b_lin -= 1;
                            b_col += 1;
                            s = 'b';
                            break;
                    }

                    d_giro = this['position'].b;
                    a_giro = document.querySelector('[data-linha="' + a_lin + '"][data-coluna="' + a_col + '"]');
                    b_giro = document.querySelector('[data-linha="' + b_lin + '"][data-coluna="' + b_col + '"]');
                    c_giro = this['position'].c;
                    
                    verificaColisao();
                    
                    if( (Math.max(a_lin, b_lin) < linhas) && 
                        (Math.min(a_col, b_col) >= 0) && 
                        (Math.max(a_col, b_col) < colunas) &&
                        !colisao_giro){
                            this['sentido'] = s;
                            this['position'].d = d_giro;
                            this['position'].a = a_giro;
                            this['position'].b = b_giro;
                        }
                    this['position'].a.setAttribute('data-cor', this['color']);
                    this['position'].b.setAttribute('data-cor', this['color']);
                    this['position'].c.setAttribute('data-cor', this['color']);
                    this['position'].d.setAttribute('data-cor', this['color']);
                    colisao_giro = false;
                    pintar(this);
                }
            }
            },
            'criar': function() {
                this['sentido'] = 'b';
                this['position'].a = document.querySelector('[data-linha="-4"][data-coluna="5"]');
                this['position'].b = document.querySelector('[data-linha="-3"][data-coluna="5"]');
                this['position'].c = document.querySelector('[data-linha="-2"][data-coluna="5"]');
                this['position'].d = document.querySelector('[data-linha="-2"][data-coluna="4"]');
                this['position'].a.setAttribute('data-cor', this['color']);
                this['position'].b.setAttribute('data-cor', this['color']);
                this['position'].c.setAttribute('data-cor', this['color']);
                this['position'].d.setAttribute('data-cor', this['color']);
                pintar(this);
            },
            'criar_mini': function() {
                var a_prox = document.querySelector('[data-linha-prox="2"][data-coluna-prox="3"]');
                var b_prox = document.querySelector('[data-linha-prox="3"][data-coluna-prox="3"]');
                var c_prox = document.querySelector('[data-linha-prox="4"][data-coluna-prox="3"]');
                var d_prox = document.querySelector('[data-linha-prox="4"][data-coluna-prox="2"]');

                a_prox.style.backgroundColor = this['color'];
                a_prox.style.boxShadow = "inset 0px 0px 2px 2px rgba(0,0,0,0.5)";
                b_prox.style.backgroundColor = this['color'];
                b_prox.style.boxShadow = "inset 0px 0px 2px 2px rgba(0,0,0,0.5)";
                c_prox.style.backgroundColor = this['color'];
                c_prox.style.boxShadow = "inset 0px 0px 2px 2px rgba(0,0,0,0.5)";
                d_prox.style.backgroundColor = this['color'];
                d_prox.style.boxShadow = "inset 0px 0px 2px 2px rgba(0,0,0,0.5)";
            },
        },
        'L': {
            'sentido': 'b',
            'color': '#00b32d',
            'position':  {
                'a': null,
                'c': null,
                'b': null,
                'd': null
            },
            'girar': function() {
                if(this['position'].a != null 
                    && this['position'].b != null
                    && this['position'].c != null
                    && this['position'].d != null){
                if((this['position'].a.style.display != 'none')
                    && (this['position'].b.style.display != 'none')
                    && (this['position'].c.style.display != 'none')
                    && (this['position'].d.style.display != 'none')){
                    limpar(this);
                    var s = '';
                    var a_col, d_col = 0;
                    var a_lin, d_lin = 0;

                    a_col = +this['position'].a.getAttribute("data-coluna");
                    d_col = +this['position'].d.getAttribute("data-coluna");
                    
                    a_lin = +this['position'].a.getAttribute("data-linha");
                    d_lin = +this['position'].d.getAttribute("data-linha");
                    
                    switch(this['sentido']){
                        case 'b':
                            a_lin += 2;
                            a_col += 2;
                            d_lin += 1;
                            d_col -= 1;
                            s = 'e';
                            break;
                        case 'e':
                            a_lin += 2;
                            a_col -= 2;
                            d_lin -= 1;
                            d_col -= 1;
                            s = 'c';
                            break;
                        case 'c':
                            a_lin -= 2;
                            a_col -= 2;
                            d_lin -= 1;
                            d_col += 1;
                            s = 'd';
                            break;
                        case 'd':
                            a_lin -= 2;
                            a_col += 2;
                            d_lin += 1;
                            d_col += 1;
                            s = 'b';
                            break;
                    }

                    c_giro = this['position'].c;
                    b_giro = this['position'].d;
                    a_giro = document.querySelector('[data-linha="' + a_lin + '"][data-coluna="' + a_col + '"]');
                    d_giro = document.querySelector('[data-linha="' + d_lin + '"][data-coluna="' + d_col + '"]');
                    
                    verificaColisao();
                    
                    if( (Math.max(a_lin, d_lin) < linhas) && 
                        (Math.min(a_col, d_col) >= 0) && 
                        (Math.max(a_col, d_col) < colunas) &&
                        !colisao_giro){
                            this['sentido'] = s;
                            this['position'].b = b_giro;
                            this['position'].a = a_giro;
                            this['position'].d = d_giro;
                        }
                    this['position'].a.setAttribute('data-cor', this['color']);
                    this['position'].b.setAttribute('data-cor', this['color']);
                    this['position'].c.setAttribute('data-cor', this['color']);
                    this['position'].d.setAttribute('data-cor', this['color']);
                    colisao_giro = false;
                    pintar(this);
                }
            }
            },
            'criar': function() {
                this['sentido'] = 'b';
                this['position'].a = document.querySelector('[data-linha="-4"][data-coluna="5"]');
                this['position'].b = document.querySelector('[data-linha="-3"][data-coluna="5"]');
                this['position'].c = document.querySelector('[data-linha="-2"][data-coluna="5"]');
                this['position'].d = document.querySelector('[data-linha="-2"][data-coluna="6"]');
                this['position'].a.setAttribute('data-cor', this['color']);
                this['position'].b.setAttribute('data-cor', this['color']);
                this['position'].c.setAttribute('data-cor', this['color']);
                this['position'].d.setAttribute('data-cor', this['color']);
                pintar(this);
            },
            'criar_mini': function() {
                var a_prox = document.querySelector('[data-linha-prox="2"][data-coluna-prox="3"]');
                var b_prox = document.querySelector('[data-linha-prox="3"][data-coluna-prox="3"]');
                var c_prox = document.querySelector('[data-linha-prox="4"][data-coluna-prox="3"]');
                var d_prox = document.querySelector('[data-linha-prox="4"][data-coluna-prox="4"]');

                a_prox.style.backgroundColor = this['color'];
                a_prox.style.boxShadow = "inset 0px 0px 2px 2px rgba(0,0,0,0.5)";
                b_prox.style.backgroundColor = this['color'];
                b_prox.style.boxShadow = "inset 0px 0px 2px 2px rgba(0,0,0,0.5)";
                c_prox.style.backgroundColor = this['color'];
                c_prox.style.boxShadow = "inset 0px 0px 2px 2px rgba(0,0,0,0.5)";
                d_prox.style.backgroundColor = this['color'];
                d_prox.style.boxShadow = "inset 0px 0px 2px 2px rgba(0,0,0,0.5)";
            },
        },
        's': {
            'sentido': 'b',
            'color': '#e6ac00',
            'position':  {
                'a': null,
                'c': null,
                'b': null,
                'd': null
            },
            'girar': function() {
                if(this['position'].a != null 
                    && this['position'].b != null
                    && this['position'].c != null
                    && this['position'].d != null){
                if((this['position'].a.style.display != 'none')
                    && (this['position'].b.style.display != 'none')
                    && (this['position'].c.style.display != 'none')
                    && (this['position'].d.style.display != 'none')){
                    limpar(this);
                    var s = '';
                    var a_col, b_col, d_col = 0;
                    var a_lin, b_lin, d_lin = 0;

                    a_col = +this['position'].a.getAttribute("data-coluna");
                    b_col = +this['position'].b.getAttribute("data-coluna");
                    d_col = +this['position'].d.getAttribute("data-coluna");

                    a_lin = +this['position'].a.getAttribute("data-linha");
                    b_lin = +this['position'].b.getAttribute("data-linha");
                    d_lin = +this['position'].d.getAttribute("data-linha");
                    
                    switch(this['sentido']){
                        case 'b':
                            a_lin += 2;
                            b_lin += 1;
                            b_col += 1;
                            s = 'e';
                            break;
                        case 'e':
                            a_lin -= 2;
                            d_col -= 1;
                            d_lin += 1;
                            s = 'b';
                            break;
                    }

                    if(s == 'e'){
                        d_giro = this['position'].b;
                        b_giro = document.querySelector('[data-linha="' + b_lin + '"][data-coluna="' + b_col + '"]');
                    }
                    else{
                        b_giro = this['position'].d;
                        d_giro = document.querySelector('[data-linha="' + d_lin + '"][data-coluna="' + d_col + '"]');
                    }
                    a_giro = document.querySelector('[data-linha="' + a_lin + '"][data-coluna="' + a_col + '"]');
                    c_giro = this['position'].c
                    
                    verificaColisao();
                    
                    if( (Math.max(a_lin, b_lin, d_lin) < linhas) && 
                        (Math.min(a_col, b_col, d_col) >= 0) && 
                        (Math.max(a_col, b_col, d_col) < colunas) &&
                        !colisao_giro){
                            this['sentido'] = s;
                            this['position'].a = a_giro;
                            this['position'].b = b_giro;
                            this['position'].c = c_giro;
                            this['position'].d = d_giro;
                            
                        }
                    this['position'].a.setAttribute('data-cor', this['color']);
                    this['position'].b.setAttribute('data-cor', this['color']);
                    this['position'].c.setAttribute('data-cor', this['color']);
                    this['position'].d.setAttribute('data-cor', this['color']);
                    colisao_giro = false;
                    pintar(this);
                }
            }
            },
            'criar': function() {
                this['sentido'] = 'b';
                this['position'].a = document.querySelector('[data-linha="-4"][data-coluna="5"]');
                this['position'].b = document.querySelector('[data-linha="-4"][data-coluna="4"]');
                this['position'].c = document.querySelector('[data-linha="-3"][data-coluna="4"]');
                this['position'].d = document.querySelector('[data-linha="-3"][data-coluna="3"]');
                this['position'].a.setAttribute('data-cor', this['color']);
                this['position'].b.setAttribute('data-cor', this['color']);
                this['position'].c.setAttribute('data-cor', this['color']);
                this['position'].d.setAttribute('data-cor', this['color']);
                pintar(this);
            },
            'criar_mini': function() {
                var a_prox = document.querySelector('[data-linha-prox="2"][data-coluna-prox="3"]');
                var b_prox = document.querySelector('[data-linha-prox="2"][data-coluna-prox="2"]');
                var c_prox = document.querySelector('[data-linha-prox="3"][data-coluna-prox="2"]');
                var d_prox = document.querySelector('[data-linha-prox="3"][data-coluna-prox="1"]');

                a_prox.style.backgroundColor = this['color'];
                a_prox.style.boxShadow = "inset 0px 0px 2px 2px rgba(0,0,0,0.5)";
                b_prox.style.backgroundColor = this['color'];
                b_prox.style.boxShadow = "inset 0px 0px 2px 2px rgba(0,0,0,0.5)";
                c_prox.style.backgroundColor = this['color'];
                c_prox.style.boxShadow = "inset 0px 0px 2px 2px rgba(0,0,0,0.5)";
                d_prox.style.backgroundColor = this['color'];
                d_prox.style.boxShadow = "inset 0px 0px 2px 2px rgba(0,0,0,0.5)";
            },
        },
    };

    function mover(obj, sentido){
        limpar(obj);
        var a_col = parseInt(obj.position.a.getAttribute("data-coluna"));
        var b_col = parseInt(obj.position.b.getAttribute("data-coluna"));
        var c_col = parseInt(obj.position.c.getAttribute("data-coluna"));
        var d_col = parseInt(obj.position.d.getAttribute("data-coluna"));
        
        var a_cor = obj.position.a.getAttribute("data-cor");
        var b_cor = obj.position.b.getAttribute("data-cor");
        var c_cor = obj.position.c.getAttribute("data-cor");
        var d_cor = obj.position.d.getAttribute("data-cor");

        a_col += sentido;
        b_col += sentido;
        c_col += sentido;
        d_col += sentido;
        
        if( Math.min(a_col, b_col, c_col, d_col) >= 0 && Math.max(a_col, b_col, c_col, d_col) < colunas ){
            obj.position.a = document.querySelector('[data-linha="' + obj.position.a.getAttribute("data-linha") + '"][data-coluna="' + a_col + '"]');
            obj.position.b = document.querySelector('[data-linha="' + obj.position.b.getAttribute("data-linha") + '"][data-coluna="' + b_col + '"]');
            obj.position.c = document.querySelector('[data-linha="' + obj.position.c.getAttribute("data-linha") + '"][data-coluna="' + c_col + '"]');
            obj.position.d = document.querySelector('[data-linha="' + obj.position.d.getAttribute("data-linha") + '"][data-coluna="' + d_col + '"]');

            obj.position.a.setAttribute('data-cor', a_cor);
            obj.position.b.setAttribute('data-cor', b_cor);
            obj.position.c.setAttribute('data-cor', c_cor);
            obj.position.d.setAttribute('data-cor', d_cor);
        }
        pintar(obj);
    }

    function limpar(obj){
        if(obj.position.a != null)
            obj.position.a.removeAttribute("style");

        if(obj.position.b != null)
            obj.position.b.removeAttribute("style");

        if(obj.position.c != null)
            obj.position.c.removeAttribute("style");

        if(obj.position.d != null)
            obj.position.d.removeAttribute("style");
    }

    function pintar(obj){
        if(obj.position.a != null){
            if( +obj.position.a.getAttribute("data-linha") > -1){
                obj.position.a.style.backgroundColor = obj.color;
                obj.position.a.style.boxShadow = "inset 0px 0px 2px 2px rgba(0,0,0,0.5)";
            }
        }

        if(obj.position.b != null){
            if( +obj.position.b.getAttribute("data-linha") > -1){
                obj.position.b.style.backgroundColor = obj.color;
                obj.position.b.style.boxShadow = "inset 0px 0px 2px 2px rgba(0,0,0,0.5)";
            }
        }

        if(obj.position.c != null){
            if( +obj.position.c.getAttribute("data-linha") > -1){
                obj.position.c.style.backgroundColor = obj.color;
                obj.position.c.style.boxShadow = "inset 0px 0px 2px 2px rgba(0,0,0,0.5)";
            }
        }

        if(obj.position.a != null){
            if( +obj.position.d.getAttribute("data-linha") > -1){
                obj.position.d.style.backgroundColor = obj.color;
                obj.position.d.style.boxShadow = "inset 0px 0px 2px 2px rgba(0,0,0,0.5)";
            }
        }
    }

    function criarCampo(){
        for (i = -4; i < 0; i++) { 
            var divLinha = document.createElement('div');
            divLinha.setAttribute('id', 'linha' + i);
            document.getElementById("campoJogo").appendChild(divLinha);
            for (j = 0; j < colunas; j++) { 
                var div = document.createElement('div');
                div.setAttribute('data-linha', i);
                div.setAttribute('data-coluna', j);
                div.style.display= "none";
                document.getElementById("linha"+i).appendChild(div);
            }
        }

        for (i = 0; i < linhas; i++) { 
            var divLinha = document.createElement('div');
            divLinha.setAttribute('id', 'linha' + i);
            document.getElementById("campoJogo").appendChild(divLinha);
            for (j = 0; j < colunas; j++) { 
                var div = document.createElement('div');
                div.className = 'campo';
                div.setAttribute('data-linha', i);
                div.setAttribute('data-coluna', j);
                if (i<0)
                    div.style.display= "none";
                document.getElementById("linha"+i).appendChild(div);
            }
        }

        for (i = 0; i < 6; i++) { 
            var divLinha2 = document.createElement('div');
            divLinha2.setAttribute('id', 'linha2_' + i);
            document.getElementById("proxPeca").appendChild(divLinha2);
            for (j = 0; j < 6; j++) { 
                var div2 = document.createElement('div');
                div2.className = 'pecaCampo';
                div2.setAttribute('data-linha-prox', i);
                div2.setAttribute('data-coluna-prox', j);
                document.getElementById("linha2_"+i).appendChild(div2);
            }
        }
    }

    function gerarObjeto(){
        if(objeto == null){

            if(objeto_temp == null)
                numeroSorte = (Math.floor((Math.random() * 10)) % (Object.values(tipos).length) );
            
            objeto = Object.values(tipos)[numeroSorte];
            
            objeto.criar();

            numeroSorte = (Math.floor((Math.random() * 10)) % (Object.values(tipos).length) );
            
            var divs = document.querySelectorAll('[data-linha-prox]');
            
            for (var div of divs) {
                div.removeAttribute("style");
            }

            objeto_temp = Object.values(tipos)[numeroSorte]; 
            
            objeto_temp.criar_mini();
            
            fim = verificaColisao();
        }
    }

    function verificaColisao(lateral=false, girar=false, direcao=0, descer=1){
        colisao = false;
        a_, b_, c_, d_ = null;
        if( objeto !== null){
            var a_lin = parseInt(objeto.position.a.getAttribute("data-linha"));
            var b_lin = parseInt(objeto.position.b.getAttribute("data-linha"));
            var c_lin = parseInt(objeto.position.c.getAttribute("data-linha"));
            var d_lin = parseInt(objeto.position.d.getAttribute("data-linha"));
            
            var a_col = parseInt(objeto.position.a.getAttribute("data-coluna"));
            var b_col = parseInt(objeto.position.b.getAttribute("data-coluna"));
            var c_col = parseInt(objeto.position.c.getAttribute("data-coluna"));
            var d_col = parseInt(objeto.position.d.getAttribute("data-coluna"));
    
            if(lateral)
                descer = 0;
            
            a_ = document.querySelector('[data-linha="' + (a_lin + descer) + '"][data-coluna="' + (a_col + direcao) + '"]');
            b_ = document.querySelector('[data-linha="' + (b_lin + descer) + '"][data-coluna="' + (b_col + direcao) + '"]');
            c_ = document.querySelector('[data-linha="' + (c_lin + descer) + '"][data-coluna="' + (c_col + direcao) + '"]');
            d_ = document.querySelector('[data-linha="' + (d_lin + descer) + '"][data-coluna="' + (d_col + direcao) + '"]');
            
            for (var i = 0; i < base.length; i++) {
                if (base[i].isEqualNode(a_) ||
                    base[i].isEqualNode(b_) ||
                    base[i].isEqualNode(c_) ||
                    base[i].isEqualNode(d_)){
                    colisao = true;
                    break;
                }
            }
            
            for (var i = 0; i < base.length; i++) {
                if (base[i].isEqualNode(a_giro) ||
                    base[i].isEqualNode(b_giro) ||
                    base[i].isEqualNode(c_giro) ||
                    base[i].isEqualNode(d_giro)){
                    colisao_giro = true;
                    break;
                }
            }
            
            max_linhas = (Math.max(a_lin, b_lin, c_lin, d_lin) +1) < linhas
            return colisao;
        }
    }

    function descerObjeto(){
        if( objeto !== null){

            limpar(objeto);
            verificaColisao();
            
            if( max_linhas && !colisao){
                a_.setAttribute('data-cor', objeto.position.a.getAttribute('data-cor'));
                b_.setAttribute('data-cor', objeto.position.b.getAttribute('data-cor'));
                c_.setAttribute('data-cor', objeto.position.c.getAttribute('data-cor'));
                d_.setAttribute('data-cor', objeto.position.d.getAttribute('data-cor'));
                objeto.position.a = a_;
                objeto.position.b = b_;
                objeto.position.c = c_;
                objeto.position.d = d_;
                pintar(objeto);
            } else {	
                atualizarBase();
            }	

        }
    }

    function pintarBase(){
        for (var i = 0; i < base.length; i++) {
            base[i].style.backgroundColor = base[i].getAttribute("data-cor");
            base[i].style.boxShadow = "inset 0px 0px 2px 2px rgba(0,0,0,0.5)";
        }
    }

    function atualizarBase(){
        objeto.position.a.setAttribute("data-cor", objeto.color);
        objeto.position.b.setAttribute("data-cor", objeto.color);
        objeto.position.c.setAttribute("data-cor", objeto.color);
        objeto.position.d.setAttribute("data-cor", objeto.color);
        base.push(objeto.position.a);
        base.push(objeto.position.b);
        base.push(objeto.position.c);
        base.push(objeto.position.d);
        objeto_temp = Object.assign({},objeto);
        objeto = null;
    }

    function removeLinhas(){
        var combo = 0;

        for (var i = 0; i < linhas; i++) {
            removerLinhas[i] = 0;
        }
        
        for (var i = 0; i < base.length; i++) {
            var l = parseInt(base[i].getAttribute("data-linha"));
            removerLinhas[l] += 1;
            
            if (removerLinhas[l] == colunas) {
                linhas_removidas += 1;
                base = base.filter(function(el) {
                    if (el.getAttribute("data-linha") == l) {
                        el.removeAttribute("style");
                        el.removeAttribute("data-cor");
                        return false;
                    }
                    return true;
                });
            }
        }

        for (var i = 0; i < removerLinhas.length; i++) {
            if(removerLinhas[i] == 10)
                combo += 1;
        }

        linhas_removidas += Math.floor(combo / 4) * 2;

        for (var i = (removerLinhas.length -1); i > 0; i--) {
            if(removerLinhas[i] == colunas){
                for (var k = i; k > 0; k--) {
                    for (var j = 0; j < colunas; j++) {
                        elemento_base = document.querySelector('[data-linha="' + k + '"][data-coluna="' + j + '"]');
                        elemento_anterior = document.querySelector('[data-linha="' + (k -1) + '"][data-coluna="' + j + '"]');

                        elemento_base.setAttribute("data-cor", elemento_anterior.getAttribute("data-cor"));
                        
                        var index_anterior = base.indexOf(elemento_anterior);
                        if ( index_anterior > -1){
                            base.splice(index_anterior,1);
                            base.push(elemento_base);
                        }

                        elemento_anterior.removeAttribute("style");
                        elemento_anterior.removeAttribute("data-cor");					
                    }
                }
            }
        }
    }

    function contarPontos(){
        var nivel = Math.floor(linhas_removidas / valor_modulo)
        pontos = linhas_removidas * 10
        document.getElementById("pontos").innerText = 'Pontos: ' + pontos
        document.getElementById("nivel").innerText = 'Nivel: ' + nivel
        if(speed > 50){
            speed = speed_base - (nivel * 80)
        }
    }

    function executarJogo(){
        setInterval(function(){
            gerarObjeto();
            removeLinhas();
            pintarBase();
            contarPontos();
        }, 5);

        
        setTimeout(function () {
            if(!fim){
                descerObjeto();
                executarJogo();
            } else {
                setTimeout(function() {
                    if(!alert("Voce perdeu! Sua pontuacao foi de: " + pontos)) 
                        document.location.reload();
                }, 10);
            }
        }, speed)
    }

    document.onkeydown = function (e) {
        var key = (window.event || e).keyCode;
        
        if (key == 32 || key == 87 || key == 38){
            if( objeto !== null){objeto.girar();}
        } else if ((key == 37 || key == 65) && !verificaColisao(true, false, -1)){
            if( objeto !== null){mover(objeto, -1);}
        } else if ((key == 39 || key == 68) && !verificaColisao(true, false, 1)){
            if( objeto !== null){mover(objeto, +1);}
        } else if ((key == 40 || key == 83) && !verificaColisao()){
            if( objeto !== null){
                descerObjeto();
            }
        } else if(key == 80){
            fim = true;
        }
    };
    
    criarCampo();
    executarJogo();
};