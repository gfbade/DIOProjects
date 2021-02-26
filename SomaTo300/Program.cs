using System;

namespace SomaTo300
{
    class Program
    {
        static void Main(string[] args)
        {
            bool repeticao = true;
            var valor = 0;
            var soma = 0;
            while (repeticao)
            {
                try
                {
                    Console.Write("Digite um número:");
                    valor = int.Parse(Console.ReadLine());
                    if (valor < 0)
                    {
                        Console.WriteLine("Números negativos não são permitidos");
                        valor = 0;
                    }
                    else if (soma < 300)
                    {
                        soma += valor;
                    }
                    if (soma >= 300) repeticao = false;
                }
                catch (Exception ex)
                {
                    Console.WriteLine("Digite somente números!");
                }
            }
            Console.WriteLine("O somatório foi: " + soma);
        }
    }
}
