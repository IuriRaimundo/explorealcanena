import React from 'react';
//CSS
import './HistoriaDeAlcanena.css';
//Componentes
import CategoryContainer from '../../../../components/CategoryContainer/CategoryContainer';

/* 
  Insira o conteúdo da página dentro deste componente,
  caso pretenda pode importar componentes partilhados mas
  tenha o cuidado de passar as props necessárias para a
  funcionalidade do componente. Está mais informação sobre
  páginas estáticas na documentação.
*/
function HistoriaDeAlcanena() {
  return (
    <>
      <article className='history-text'>
        <p className='history-paragraph'>
          A origem da vila de Alcanena remonta, segundo alguns historiadores, à ocupação árabe da Península, da qual herdou, para
          além da toponímia, a fixação e o desenvolvimento dos trabalhos de curtimento de peles. Da influência árabe na região
          ter-lhe-á ficado, como atrás foi referido, a toponímia: as duas principais versões propõem-nos “alcalina”, “cabaça seca”
          e “al-kinan”, “lugar sombreado”. Contudo, e durante séculos, a história de Alcanena e sua região dilui-se na história
          mais geral do concelho de Torres Novas, do qual se desligou administrativamente no início do século. A vila terá sido
          tomada pelos portugueses no reinado de D. Sancho I, que teve grande importância no seu povoamento. No decurso da
          história, Alcanena sofreu com as lutas com Castela e, mais tarde, com as invasões francesas e com as lutas liberais
          entre D. Pedro e D. Miguel.
        </p>
        <p className='history-paragraph'>
          Terra liberal por excelência, Alcanena vibrou com a implantação da República, a que está indissoluvelmente ligada. “Para
          o País a República, para Alcanena o Concelho” foi o mote para unir os alcanenenses nesses tempos. Em 8 de Maio de 1914,
          pela lei Número 2 156, era criado o Concelho de Alcanena, integrando as freguesias de Alcanena, Bugalhos, Minde e
          Monsanto, até aí pertencentes ao concelho de Torres Novas, e Louriceira e Malhou, então do concelho de Santarém. O mesmo
          diploma elevaria Alcanena à categoria de vila. Mas se a autonomia, por lei, chegou apenas em 1914, não há dúvida de que
          Alcanena, desde cedo, se começou a evidenciar pelas características das suas atividades económicas, com especial
          destaque para a indústria de curtumes.
        </p>
        <p className='history-paragraph'>
          A fixação da povoação é nitidamente medieval e a fundação da Confraria de Alcanena, em 1353, atesta que, a meio do
          século XIV, emergiam já sinais reveladores do sentimento comunitário dos moradores. No cadastro da população do reino,
          realizado em 1527, Alcanena, Peral e Gouxaria contavam 40 vizinhos, pelo que a população das três localidades deveria
          andar muito perto das duzentas pessoas, no início do século XVI. Em 1758 contava já com 267 fogos e 1067 habitantes,
          como freguesia do concelho de Torres Novas.
        </p>
        <p className='history-paragraph'>
          Em 1764, com Monsanto, integra a 7ª Companhia da Capitania-Mor das Ordenanças daquele concelho, agrupando 13 esquadras
          repartidas por Monsanto, Alcanena, Covão de Feto, Gouxaria, Moitas Venda, Casais Robustos e Raposeira.
        </p>
        <p className='history-paragraph'>
          Em 27 de Outubro de 1782, em sessão da Câmara de Torres Novas, é deferido um pedido do povo de Alcanena que pretende
          realizar a Feira Franca de S. Pedro, anual, a 29 de Junho. Em 1788, aquela autarquia discute a realização de um Mercado
          Semanal em Alcanena, às quartas-feiras, autorizado pouco depois. Estas duas imposições do povo de Alcanena fazem-nos
          pensar que a região detinha já uma vida económica muito própria e florescente, ao que não será estranho, pensamos, o
          surto que se terá verificado nas atividades de curtumes.
        </p>
        <p className='history-paragraph'>
          É desta época, concretamente de 1792, o brasão encontrado num edifício fabril da vila, associado a uma inscrição que diz
          tratar-se de uma fábrica de sola com privilégio do governo pombalino. Este desenvolvimento vai refletir-se no número de
          fogos recenseados no ano de 1867: 472, quase duplicando os que a freguesia tinha 100 anos antes. Alcanena continua a
          crescer e a centralizar.
        </p>
        <p className='history-paragraph'>
          Em Julho de 1887, a Câmara Municipal de Torres Novas aprova a realização de um mercado semanal em Casais Galegos (hoje
          Vila Moreira) para, em 21 de Maio de 1896, dar parecer favorável à criação de uma Feira anual mista em Alcanena, no dia
          de S. João. Mas, se o dinamismo económico era uma realidade, também o era o fervilhar de ideias de autonomia
          administrativa, estreitamente ligados a uma forte implantação do republicanismo.
        </p>
        <p className='history-paragraph'>
          Situado na região do Ribatejo, o concelho de Alcanena conta, atualmente, com cerca de 15 mil habitantes, distribuídos
          por sete freguesias (União de Freguesias de Alcanena e Vila Moreira, Bugalhos, União de Freguesias de Malhou, Louriceira
          e Espinheiro, Minde, Moitas Venda, Monsanto e Serra de Santo António) e uma área de 127,8 Km2.
        </p>
        <p className='history-paragraph'>
          O concelho apresenta-se hoje como um território caracterizado pela atividade industrial de curtumes, que é a sua
          principal base económica, logo seguida da indústria têxtil que, com raízes históricas na freguesia de Minde, assume
          igualmente um importante papel na economia local e regional.
        </p>
        <p className='history-paragraph'> Fonte: Câmara Municipal de Alcanena</p>
      </article>
      <CategoryContainer
        sectionTitle='EXPLORE'
        sectionRef={void 0}
        firstItemImage='explorealcanena-natureza.jpg'
        firstItem={{
          name: 'Património Natural',
          id: 'Natureza',
          description: 'Alcanena tem vários tesouros oferecidos pela natureza à espera para serem visitados.',
          overlayText: 'ver património natural',
        }}
        secondItemImage='explorealcanena-jardins-e-miradouros.jpg'
        secondItem={{
          name: 'Jardins e miradouros',
          id: 'Jardins e miradouros',
          description: 'Venha visitar os belos jardins e ver as belas paisagens dos miradouros de Alcanena.',
          overlayText: 'ver jardins e miradouros',
        }}
        thirdItemImage='explorealcanena-cultura.jpg'
        thirdItem={{
          name: 'Património Cultural',
          id: 'Cultura',
          description: 'Descubra mais sobre a cultura da região nestes locais.',
          overlayText: 'ver património cultural',
        }}
      />
      <CategoryContainer
        sectionTitle='SABOREIE'
        sectionRef={void 0} /* void 0 para não atribuir nenhum Ref ao elemento, uma vez que não é necessário */
        firstItemImage='explorealcanena-restaurantes.jpg'
        firstItem={{
          name: 'Restaurantes',
          description: (
            <>
              Alcanena tem vários tesouros oferecidos pela natureza
              <br />à espera para serem visitados.
            </>
          ),
          overlayText: 'ver restaurantes',
        }}
        secondItemImage='explorealcanena-pastelarias.jpg'
        secondItem={{
          name: 'Pastelarias',
          description: (
            <>
              Venha visitar os belos jardins e ver as belas paisagens
              <br />
              dos miradouros de Alcanena.
            </>
          ),
          overlayText: 'ver pastelarias',
        }}
        thirdItemImage='explorealcanena-cafés.jpg'
        thirdItem={{
          name: 'Cafés',
          description: <>Descubra mais sobre a cultura da região nestes locais.</>,
          overlayText: 'ver cafés',
        }}
      />
    </>
  );
}
export default HistoriaDeAlcanena;
