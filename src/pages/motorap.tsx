import React from "react";

export default function MotorAP() {
  return (
    <div className="bg-gray-50 text-gray-900">

      {/* HERO */}
      <section className="w-full bg-[url('https://via.placeholder.com/1600x900')] bg-cover bg-center text-white py-24 px-4">
        <div className="max-w-4xl mx-auto text-center drop-shadow-xl">
          <img
            src="/public/ebook_celular.png"
            alt="Mockup do ebook"
            className="w-[260px] md:w-[320px] mx-auto mb-6 drop-shadow-xl"
          />
          <h1 className="text-gray-900 text-4xl md:text-6xl font-extrabold leading-tight">
            O Guia Completo Para Cuidar do Seu<br />
            <span className="text-yellow-400">Motor AP Sem Complicação</span>
          </h1>
          <p className="mt-4 text-gray-700 text-lg md:text-2xl max-w-3xl mx-auto font-light">
            Evite gastos desnecessários, aprenda a diagnosticar problemas
            e mantenha seu AP funcionando como novo — mesmo que você seja iniciante.
          </p>
          
          <a
            href="https://pay.kiwify.com.br/eLZOieE"
            className="inline-block mt-10 bg-yellow-400 text-black font-extrabold px-10 py-4 rounded-xl text-xl hover:bg-yellow-300 transition"
          >
            QUERO GARANTIR MEU ACESSO
          </a>
          <p className="mt-4 text-sm text-gray-700 opacity-90">
            Acesso imediato • Pagamento único • Conteúdo para iniciantes
          </p>
        </div>
      </section>

      {/* BLOCO PRETO INICIAL */}
      <section className="w-full bg-black text-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            Motores AP<br />
            <span className="text-yellow-400">Conservação e Manutenção Descomplicada</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl opacity-90 max-w-3xl mx-auto">
            Aprenda a cuidar do seu motor AP com instruções simples, detalhadas e acessíveis até para iniciantes.
            O guia definitivo para quem quer economizar, preservar o carro e evitar dores de cabeça.
          </p>

          {/* Vídeo demonstrativo do ebook */}
          <div className="mt-6 flex justify-center">
            <video
              className="w-[240px] h-auto rounded-2xl shadow-lg border border-black/10"
              src="public/ebook.MOV"
              autoPlay
              loop
              muted
              playsInline
              onLoadedMetadata={(e) => {
               e.currentTarget.playbackRate = 1.5;
              }}
            />
          </div>

          <a
            href="https://pay.kiwify.com.br/eLZOieE"
            className="inline-block mt-8 bg-yellow-400 text-black font-bold px-8 py-4 rounded-xl text-lg hover:bg-yellow-300 transition"
          >
            Quero Garantir Meu Ebook
          </a>
        </div>
      </section>

      {/* O QUE VAI APRENDER */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            O Que Você Vai Aprender
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {[
              ["✔ Sistema de Alimentação", "Carburadores Weber/Brosol, bomba de combustível, filtros, mangueiras e sintomas de falha."],
              ["✔ Sistema de Ignição", "Distribuidor, cabos, velas, bobina, regulagem de ponto — tudo explicado de forma simples."],
              ["✔ Sistema de Arrefecimento", "Radiador, ventoinha, sensor, mangueiras, aditivo e diagnóstico de superaquecimento."],
              ["✔ Sistema de Lubrificação", "Óleo, bomba, filtro, pressão e como identificar problemas antes que o motor quebre."]
            ].map(([title, desc], i) => (
              <div key={i} className="border p-6 rounded-2xl shadow bg-white">
                <h3 className="text-xl font-bold mb-4">{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section className="bg-gray-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Quem Já Comprou, Recomenda</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              ["“Finalmente um conteúdo claro e direto sobre manutenção de motor AP. Economizei demais só entendendo o básico que o ebook ensina.”", "Carlos Eduardo"],
              ["“Sou iniciante e consegui fazer a manutenção simples do meu Gol 1.8 em casa. Vale cada centavo!”", "Leonardo Mattos"]
            ].map(([text, name], i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow">
                <p className="italic">{text}</p>
                <p className="mt-4 font-bold">— {name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section id="oferta" className="py-20 px-4 bg-black text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-extrabold">Oferta Especial de Lançamento</h2>

          <p className="mt-6 text-lg opacity-90">
            Baixe agora o ebook completo por um valor promocional por tempo limitado.
          </p>

            {/* Imagem ilustrativa do Motor AP */}
          <div className="mt-10 flex justify-center">
            <img
              src="/public/motor_ap2.jpg"
              alt="Motor AP 2"
              className="w-[360px] md:w-[420px] rounded-2xl shadow-xl border border-black/10"
            />
          </div>


          <div className="bg-white text-black rounded-2xl p-8 mt-10 shadow-xl">
            <h3 className="text-3xl font-bold mb-2">R$ 49,90</h3>
            <p className="text-gray-700 mb-6">Acesso imediato — pagamento único</p>

            <a
              href="https://pay.kiwify.com.br/eLZOieE"
              className="inline-block bg-yellow-400 font-bold px-8 py-4 rounded-xl text-lg hover:bg-yellow-300 transition"
            >
              Comprar Agora
            </a>
          </div>
        </div>
      </section>

      {/* 5 SINAIS */}
      <section className="py-24 px-4 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-16">
            5 Sinais de Que Você Está <span className="text-red-600">Perdendo Dinheiro</span> Com o Seu Motor AP
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-10">
          {[
            ["1. Consumo Alto", "Motor desregulado faz seu carro beber muito mais do que deveria.", "/public/Consumo.jpg"],
            ["2. Falhas e Engasgos", "Carro trepidando, falhando ou morrendo no ponto? Fique atento.", "/public/falha_ignicao.png"],
            ["3. Superaquecimento", "Problema sério que pode destruir seu motor em minutos.", "/public/Aquecimento.jpg"],
            ["4. Vazamentos", "Óleo ou combustível pingando? Isso nunca é normal.", "/public/Fumaca.jpg"],
            ["5. Barulhos Estranhos", "Tec-tec, assobios, batidas — todos os ruídos têm um motivo.", "/public/Barulho.jpg"]
          ].map(([title, desc, img], i) => (
            <div
              key={i}
              className={`p-8 bg-gray-50 rounded-2xl shadow-lg border 
              ${i === 3 ? "md:col-span-2 md:mx-auto" : ""}
              `}
            >
              {/* IMAGEM */}
              <img
                src={img}
                className="w-full h-40 object-cover rounded-xl mb-4 shadow"
                alt={title}
              />

              <h3 className="text-xl font-bold mb-3 text-red-600">{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MINI-OFERTA */}
      <section className="py-20 px-4 bg-yellow-400 text-black text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Você Pode Aprender a Evitar Tudo Isso
          </h2>

          <p className="mt-6 text-lg max-w-3xl mx-auto">
            Com explicações simples e diretas, você consegue manter o motor AP funcionando liso — sem depender 100% de oficina.
          </p>

          {/* Imagem ilustrativa do Motor AP */}
          <div className="mt-10 flex justify-center">
            <img
              src="/public/motor_ap1.jpg"   
              alt="Motor AP 1"
              className="w-[360px] md:w-[420px] rounded-2xl shadow-xl border border-black/10"
            />
          </div>


          <a
            href="https://pay.kiwify.com.br/eLZOieE"
            className="inline-block mt-8 bg-black text-white font-bold px-10 py-4 rounded-xl text-xl hover:bg-gray-800 transition"
          >
            QUERO APRENDER
          </a>
        </div>
      </section>

      {/* PROBLEMA → CONSEQUÊNCIA → SOLUÇÃO */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
            Se Você Tem um Motor AP, Você Precisa Saber Disso
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              ["❌ Problemas Comuns", "Carro falhando, consumo alto, aquecimento, marcha lenta irregular… sinais clássicos de manutenção descuidada."],
              ["⚠️ Riscos Reais", "Ignorar pequenos sintomas pode levar à quebra total do motor — e gastos que chegam a milhares de reais."],
              ["✔ Solução", "Aprender o básico, com orientação clara e prática, evita prejuízos e aumenta a vida útil do motor."]
            ].map(([title, desc], i) => (
              <div key={i} className="p-6 bg-gray-50 rounded-2xl shadow">
                <h3 className="text-xl font-bold mb-3">{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="py-20 px-4 bg-black text-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-12">
            Este Ebook É Para Você Que…
          </h2>

          {/* Imagem ilustrativa (média) */}
          <div className="flex justify-center mb-12">
          <img
            src="/public/garagem.jpg"   // substitua pelo nome da imagem
            alt="Motor AP"
            className="w-[400px] md:w-[492px] rounded-2xl drop-shadow-2xl"
          />
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              "✔ Tem um carro equipado com motor AP e quer entender melhor o funcionamento dele.",
              "✔ Quer evitar gastos desnecessários com mecânicos e oficinas.",
              "✔ Gosta de fazer pequenas manutenções por conta própria.",
              "✔ Está cansado de explicações complicadas e quer algo direto ao ponto."
            ].map((txt, i) => (
              <div key={i} className="p-6 bg-gray-900 rounded-2xl shadow">
                <p className="text-lg">{txt}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROVA DE VALOR */}
      <section className="py-20 px-4 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-12">
            O Que Torna Este Material Diferente?
          </h2>

          <p className="text-lg max-w-3xl mx-auto mb-16">
            Nada de termos complicados ou textos técnicos demais.
            Aqui você aprende com clareza, objetividade e exemplos visuais.
          </p>

          {/* Imagem do ebook sem fundo — tamanho médio/grande */}
          <div className="flex justify-center mb-12">
          <img
            src="/public/ebook_celular_2.png"
            alt="Ebook Motores AP"
            className="w-[240px] md:w-[300px] rounded-2xl drop-shadow-2xl"
          />
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {[
              ["📘 Explicações detalhadas", "Os principais sistemas do motor AP explicados com linguagem simples."],
              ["🔧 Passo a passo direto ao ponto", "Você aprende como identificar problemas e evitar danos maiores."],
              ["💰 Economia imediata", "Evite gastos desnecessários com diagnósticos simples."],
              ["🧠 Conteúdo para iniciantes", "Qualquer pessoa consegue entender e aplicar."]
            ].map(([title, desc], i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow">
                <h3 className="text-xl font-bold mb-3">{title}</h3>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="py-20 px-4 bg-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Garantia Incondicional de 7 Dias</h2>

          <p className="text-lg mb-10">
            Se você achar que o ebook não te ajudou ou não era o que esperava,
            basta enviar uma mensagem e devolvemos 100% do valor. Simples assim.
          </p>

          <p className="text-xl font-extrabold">Risco zero para você.</p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 text-center text-sm opacity-70">
        © 2025 Alemarco Raridades — Todos os direitos reservados.
      </footer>

    </div>
  );
  }


