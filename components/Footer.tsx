// Arquivo: /src/components/Footer.tsx
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full bg-gray-100 border-t p-8 text-center">
      <p>
        &copy; {currentYear} FisioVitalitá - Todos os direitos reservados.
      </p>
      <p className="text-sm text-gray-600 mt-2">
        Desenvolvido por Matheus [Seu Sobrenome aqui]
      </p>
    </footer>
  );
}
