//Operadores en JS
/* 
    OPERADORES MAS USADOS
    x = y       x += y
    x -= y      x *= y
    x /= y      x %= y
    x **= y     
    OPERADORES COMPLEJOS
    x <<= y
    x >>= y     x >>>= y
    x &= y      x ^= y
    x |= y      x &&= y
    x ||= y     x ??= y
 */
//Examples

let op=5;
op = op;
alert("Asignacion = "+op);

op += 5;
alert("Suma += "+op);

op -= 5;
alert("Resta -= "+op);

op *= 5;
alert("Multiplicar *= "+op);

op /= 5;
alert("Dividir /= "+op);

op %= 5;
alert("Resto %= "+op);

op = 5;

op **= 5; /*Exponente 5 elevado a la 5 = 3125*/
alert("Exponente **= "+op);