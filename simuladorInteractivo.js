function promedio(numero1, numero2, numero3){
    let resultado = (numero1 + numero2 + numero3) / 3;
    return resultado;
    }

let continuar = 'si';
while (continuar == 'si'){

    let nomAlumno = prompt('Ingrese nombre del alumno/a');
    let nota1 = +prompt('Ingrese primer nota del alumno/a:');
    let nota2 = +prompt('Ingrese segunda nota del alumno/a:');
    let nota3 = +prompt('Ingrese tercer nota del alumno/a:');
    let califFinal = promedio(nota1, nota2, nota3);

    if( nomAlumno == '' || nota1 == '' || nota2 =='' || nota3 ==''){
        alert('Por favor rellene todos los campos obligatorios')
    }else{
            if(califFinal <= 10 && califFinal >= 6) {
                alert('La calificacion final del alumno/a ' + nomAlumno + ' es: ' + califFinal + '\n'
                + 'Por lo tanto esta APROBADO/A');
            }else{
                if(califFinal <6 && califFinal >=4){
                    alert('La calificacion final del alumno/a ' + nomAlumno + ' es: ' + califFinal + '\n'
                    + 'Por lo tanto ' + nomAlumno + ' debe rendir examen recuperatorio');
                }else{
                    if(califFinal <4 && califFinal >= 0){
                        alert('La calificacion final del alumno/a ' + nomAlumno + ' es: ' + califFinal + '\n'
                        + 'Por lo tanto ' + nomAlumno + ' esta DESAPROBADO/A');
                    }
                }
            }
        }
    continuar = prompt('¿Desea continuar promediando notas? si/no');
}
    alert('PROGRAMA FINALIZADO');