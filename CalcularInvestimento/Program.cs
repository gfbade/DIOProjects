using System;

namespace CalcularInvestimento
{
    class Program
    {
        static void Main(string[] args)
        {
            Investimento calcularLucro = new Investimento(1000, 0.04);
            Investimento.calcularLucro(2);
            Console.WriteLine(calcularLucro);
        }
    }
}
