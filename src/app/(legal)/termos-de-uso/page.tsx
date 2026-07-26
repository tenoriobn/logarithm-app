import {
  LegalPage,
  LegalHeader,
  LegalContent,
  LegalSection,
  LegalParagraph,
  LegalList,
  LegalListItem,
} from 'src/components/LegalDocument';

const TermOfUse = () => {
  return (
    <LegalPage>
      <LegalHeader title="Termos de Uso" lastUpdated="24 de julho de 2026" />

      <LegalContent ariaLabel="Detalhes dos Termos de Uso">
        <LegalSection id="aceitacao" title="1. Aceitação">
          <LegalParagraph>
            Ao acessar ou utilizar este site, você concorda com os presentes Termos de Uso.
          </LegalParagraph>
          <LegalParagraph>
            Caso não concorde com qualquer disposição deste documento, recomendamos que interrompa a
            utilização do site.
          </LegalParagraph>
        </LegalSection>

        <LegalSection id="sobre-a-logarithm" title="2. Sobre a Logarithm">
          <LegalParagraph>
            A Logarithm é uma consultoria especializada em soluções digitais, desenvolvimento de
            software, automação de processos, integração de sistemas e projetos de tecnologia
            desenvolvidos sob medida para empresas.
          </LegalParagraph>
          <LegalParagraph>
            As informações apresentadas neste site possuem caráter institucional e informativo.
          </LegalParagraph>
        </LegalSection>

        <LegalSection id="utilizacao-do-site" title="3. Utilização do site">
          <LegalParagraph>
            Você concorda em utilizar este site de forma ética, responsável e em conformidade com a
            legislação aplicável.
          </LegalParagraph>
          <LegalParagraph>Não é permitido:</LegalParagraph>
          <LegalList>
            <LegalListItem>utilizar o site para atividades ilícitas;</LegalListItem>
            <LegalListItem>tentar acessar áreas restritas sem autorização;</LegalListItem>
            <LegalListItem>comprometer a segurança da plataforma;</LegalListItem>
            <LegalListItem>reproduzir ou distribuir conteúdos sem autorização;</LegalListItem>
            <LegalListItem>utilizar informações deste site para fins fraudulentos.</LegalListItem>
          </LegalList>
        </LegalSection>

        <LegalSection id="propriedade-intelectual" title="4. Propriedade intelectual">
          <LegalParagraph>
            Todo o conteúdo disponibilizado neste site, incluindo textos, identidade visual, imagens,
            ícones, logotipos, elementos gráficos, código-fonte e demais materiais, pertence à
            Logarithm ou é utilizado mediante autorização.
          </LegalParagraph>
          <LegalParagraph>
            Nenhum conteúdo poderá ser copiado, reproduzido, distribuído ou utilizado para fins
            comerciais sem autorização prévia.
          </LegalParagraph>
        </LegalSection>

        <LegalSection id="conteudo-do-site" title="5. Conteúdo do site">
          <LegalParagraph>
            Nos esforçamos para manter todas as informações atualizadas e corretas.
          </LegalParagraph>
          <LegalParagraph>
            Entretanto, o conteúdo disponibilizado possui caráter informativo e poderá ser alterado,
            atualizado ou removido a qualquer momento, sem aviso prévio.
          </LegalParagraph>
        </LegalSection>

        <LegalSection id="links-para-terceiros" title="6. Links para terceiros">
          <LegalParagraph>
            Este site poderá conter links para serviços ou plataformas externas.
          </LegalParagraph>
          <LegalParagraph>
            A Logarithm não possui controle sobre esses ambientes e não se responsabiliza por seus
            conteúdos, políticas ou práticas.
          </LegalParagraph>
        </LegalSection>

        <LegalSection id="limitacao-de-responsabilidade" title="7. Limitação de responsabilidade">
          <LegalParagraph>
            Embora adotemos boas práticas de desenvolvimento e segurança, não garantimos que o site
            esteja livre de indisponibilidades temporárias, falhas técnicas ou interrupções
            ocasionais.
          </LegalParagraph>
          <LegalParagraph>
            A utilização do site ocorre por conta e risco do usuário.
          </LegalParagraph>
        </LegalSection>

        <LegalSection id="privacidade" title="8. Privacidade">
          <LegalParagraph>
            O tratamento de dados pessoais é realizado conforme descrito em nossa Política de
            Privacidade.
          </LegalParagraph>
          <LegalParagraph>
            Ao utilizar este site, o usuário declara estar ciente das práticas descritas naquele
            documento.
          </LegalParagraph>
        </LegalSection>

        <LegalSection id="alteracoes-destes-termos" title="9. Alterações destes Termos">
          <LegalParagraph>
            A Logarithm poderá atualizar estes Termos de Uso sempre que necessário para refletir
            mudanças legais, técnicas ou operacionais.
          </LegalParagraph>
          <LegalParagraph>
            A versão mais recente permanecerá disponível nesta página.
          </LegalParagraph>
        </LegalSection>

        <LegalSection id="contato" title="10. Contato">
          <LegalParagraph>
            Em caso de dúvidas relacionadas a estes Termos de Uso, entre em contato pelos canais
            oficiais da Logarithm.
          </LegalParagraph>
          <LegalParagraph>
            <span className="font-semibold">E-mail:</span>{' '}
            <a href="mailto:logarithm.ltda@gmail.com" className="hover:underline">
              logarithm.ltda@gmail.com
            </a>
          </LegalParagraph>
        </LegalSection>

        <LegalSection id="propostas-comerciais" title="11. Propostas comerciais">
          <LegalParagraph>
            As informações apresentadas neste site não constituem proposta comercial vinculante.
          </LegalParagraph>
          <LegalParagraph>
            Escopo, prazos, tecnologias, valores e condições de desenvolvimento são definidos
            individualmente para cada projeto, de acordo com as necessidades do cliente.
          </LegalParagraph>
        </LegalSection>
      </LegalContent>
    </LegalPage>
  );
};

export default TermOfUse;
