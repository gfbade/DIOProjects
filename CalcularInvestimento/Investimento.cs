using System;

namespace CalcularInvestimento
{
    public class Investimento
    {
        public decimal valorInicial;
        public decimal jurosMensais;

        public Investimento(decimal valorInicial, decimal jurosMensais)
        {
            this.valorInicial = valorInicial;
            this.jurosMensais = jurosMensais;
        }

        public decimal calcularLucro(int meses)
        {
            var retorno = (valorInicial * ((decimal)Math.Pow(1 + jurosMensais, meses))) - valorInicial;
            return retorno;
        }
    }
}