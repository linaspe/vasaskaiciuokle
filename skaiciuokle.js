

   let objektoTipas = [];

    objektoTipas[1] = {c: 0.0372, v: 0.0274, g: 2, t:`Gyvenamoji – daugiabučiai pastatai`};
    objektoTipas[2] = {c: 0.0224, v: 0.0165, g: 1, t:`Gyvenamoji – individualūs namai`};
    objektoTipas[3] = {c: 0.0447, v: 0.0330, g: 1, t:`Gyvenamoji – individualūs namai (kassavaitinis aptarnavimas)`};
    objektoTipas[4] = {c: 0.0203, v: 0.0149, g: 2, t:`Viešbučių`};
    objektoTipas[5] = {c: 0.0217, v: 0.0160, g: 2, t:`Administracinė`};
    objektoTipas[6] = {c: 0.0499, v: 0.0368, g: 2, t:`Prekybos`};
    objektoTipas[7] = {c: 0.0247, v: 0.0182, g: 2, t:`Paslaugų`};
    objektoTipas[8] = {c: 0.0637, v: 0.0470, g: 2, t:`Maitinimo`};
    objektoTipas[9] = {c: 0.0102, v: 0.0075, g: 2, t:`Garažų`};
    objektoTipas[10] = {c: 0.0205, v: 0.0151, g: 2, t:`Gamybos ir pramonės`};
    objektoTipas[11] = {c: 0.0164, v: 0.0121, g: 2, t:`Transporto`};
    objektoTipas[12] = {c: 0.0157, v: 0.0116, g: 2, t:`Sandėliavimo`};
    objektoTipas[13] = {c: 0.0122, v: 0.0090, g: 2, t:`Mokslo, kultūros ir švietimo`};
    objektoTipas[14] = {c: 0.0113, v: 0.0083, g: 2, t:`Sporto, poilsio`};
    objektoTipas[15] = {c: 0.0296, v: 0.0218, g: 2, t:`Gydymo`};
    objektoTipas[16] = {c: 0.3757, v: 0.2768, g: 1, t:`Prekybinės paskirties patalpų, esančių degalinių teritorijose`};
    objektoTipas[17] = {c: 0.0087, v: 0.0064, g: 2 , t:`Religinė`};
    objektoTipas[18] = {c: 0.0166, v: 0.0122, g: 2, t:`Specialioji`} ;
    objektoTipas[19] = {c: 0.0152, v: 0.0112, g: 2, t:`Sodų`} ;
    objektoTipas[20] = {c: 121, v: 0, g: 3,  t:`Kiti objektai, naudojami viešiesiems renginiams, neregistruoti Nekilnojamo turto registre (1 konteineris)`};
    objektoTipas[21] = {c: 10, v: 5, g: 4, t: `Kiti objektai (1 mėnesis)`};




    function round(value, decimals) {
        return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
    }

    function calc_first_part(size, item) {

    let val;

        if(objektoTipas[item].g == 3) val = 1 * objektoTipas[item].c;
        else if(objektoTipas[item].g == 4) val = 12 * objektoTipas[item].c;
        else val = round(size * objektoTipas[item].c *12, 2 );

        return val;
    }

    function calc_second_part(size, item) {
        let val;

        if(objektoTipas[item].g == 1) val = round(32.5 * 0.0850 *12, 2) ;
        else if(objektoTipas[item].g== 2) val = round(size * objektoTipas[item].v * 12, 2) ;
        else if(objektoTipas[item].g== 3) val = round(32.5 * 0.0850 *12, 2) ;
        else if(objektoTipas[item].g == 4) val = 1 * objektoTipas[item].v;

        return val;
    }
