import React, { useEffect } from "react";

export default function Upsell() {
  useEffect(() => {
    // Carrega o script da Kiwify dinamicamente
    const script = document.createElement("script");
    script.src = "https://snippets.kiwify.com/upsell/upsell.min.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="font-inter bg-gray-50 text-gray-900 min-h-screen py-16 px-4">
      <div className="max-w-3xl mx-auto text-center">

        {/* Título */}
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">
          Oferta Especial <span className="text-yellow-500">Somente Agora</span>
        </h1>

        {/* Sub */}
        <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto mb-10">
          Aproveite esta condição exclusiva disponível apenas nesta etapa.
        </p>

        {/* Imagem (substitua quando quiser) */}
        <div className="flex justify-center mb-10">
          <img
            src="/public/upsell.png"
            alt="Oferta Especial"
            className="w-[500px] md:w-[657px] rounded-2xl shadow-xl"
          />
        </div>


{/* Conteúdo resumido do upsell */}
<div className="bg-white p-8 rounded-2xl shadow-lg mb-10 text-left">
  <h2 className="text-2xl font-bold mb-4">Você leva 3 produtos pelo preço de 1</h2>

  <ul className="list-disc list-inside space-y-3 text-lg leading-relaxed">
    <li>Este material reúne uma vasta gama de conhecimentos utilizados na avaliação de carros antigos.</li>

    <li>
      <strong>19 Seções Práticas:</strong> Conteúdo claro e direto, com exemplos reais de boas e más práticas no mercado.
    </li>

    <li>
      <strong>Dicas Essenciais:</strong> Saiba exatamente o que observar para evitar armadilhas comuns e garantir um ótimo negócio.
    </li>

    <li>
      <strong>Narrativas e Imagens Detalhadas:</strong> Explicações visuais que tornam tudo fácil de entender e aplicar.
    </li>

    <li>
      Destinado a entusiastas de antigomobilismo que querem comprar um carro antigo, mas ainda não têm segurança para fazer isso sozinhos.
    </li>

    <li>
      Ideal para quem já possui um carro antigo, mas deseja trocar por outro e não quer cometer erros.
    </li>

    <li>
      Perfeito para quem quer evitar intermediários caros e aprender a avaliar um carro antigo com autonomia.
    </li>
  </ul>
</div>


        {/* Conteúdo resumido do upsell */}
        <div className="bg-white p-8 rounded-2xl shadow-lg mb-10 text-left">
          <h2 className="text-2xl font-bold mb-4">O que você vai receber:</h2>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>🔥 Conteúdo extra exclusivo</li>
            <li>🔧 Complemento perfeito para seu ebook</li>
            <li>📘 Material prático e direto ao ponto</li>
          </ul>
        </div>

        {/* Bloco da Kiwify */}
        <div
          style={{ textAlign: "center" }}
          id="kiwify-upsell-3F6jbnr"
          data-upsell-url=""
          data-downsell-url=""
        >
          <button
            id="kiwify-upsell-trigger-3F6jbnr"
            style={{
              backgroundColor: "#5383ad",
              padding: "12px 16px",
              cursor: "pointer",
              color: "#FFFFFF",
              fontWeight: 600,
              borderRadius: "8px",
              border: "1px solid #5383ad",
              fontSize: "20px",
              width: "100%",
              maxWidth: "380px",
              margin: "0 auto"
            }}
          >
            Sim, eu aceito essa oferta especial por apenas R$ 77,00!
          </button>

          <div
            id="kiwify-upsell-cancel-trigger-3F6jbnr"
            style={{
              marginTop: "1rem",
              cursor: "pointer",
              fontSize: "16px",
              textDecoration: "underline",
              fontFamily: "sans-serif"
            }}
          >
            Não, eu gostaria de recusar essa oferta
          </div>
        </div>

      </div>
    </div>
  );
}

