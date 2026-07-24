import {
  LegalPage,
  LegalHeader,
  LegalContent,
  LegalSection,
  LegalParagraph,
  LegalList,
  LegalListItem,
} from 'src/components/LegalDocument';

const PrivacyPolicy = () => {
  return (
    <LegalPage>
      <LegalHeader title="Política de Privacidade" lastUpdated="24 de julho de 2026" />

      <LegalContent ariaLabel="Detalhes da Política de Privacidade">
        <LegalSection id="introducao" title="1. Introdução">
          <LegalParagraph>
            A Logarithm valoriza a privacidade e a proteção dos dados pessoais de seus visitantes,
            clientes e parceiros.
          </LegalParagraph>
          <LegalParagraph>
            Esta Política de Privacidade explica quais informações podem ser coletadas durante a
            utilização deste site, como elas são utilizadas e quais são os direitos dos titulares
            dos dados, em conformidade com a Lei Geral de Proteção de Dados (LGPD).
          </LegalParagraph>
          <LegalParagraph>
            Ao utilizar este site, você concorda com as práticas descritas nesta política.
          </LegalParagraph>
        </LegalSection>

        <LegalSection id="quais-dados-coletamos" title="2. Quais dados coletamos">
          <LegalParagraph>
            Dependendo da forma como você utiliza o site, poderemos coletar:
          </LegalParagraph>
          <LegalList>
            <LegalListItem>Nome;</LegalListItem>
            <LegalListItem>Endereço de e-mail;</LegalListItem>
            <LegalListItem>Empresa;</LegalListItem>
            <LegalListItem>Telefone (quando informado);</LegalListItem>
            <LegalListItem>Informações enviadas por meio de formulários de contato;</LegalListItem>
            <LegalListItem>Informações enviadas por meio de formulários de contato;</LegalListItem>
            <LegalListItem>
              Dados técnicos de navegação, como endereço IP, navegador, dispositivo, páginas
              acessadas e tempo de permanência.
            </LegalListItem>
          </LegalList>
        </LegalSection>

        <LegalSection id="como-utilizamos-seus-dados" title="3. Como utilizamos seus dados">
          <LegalParagraph>
            Os dados coletados podem ser utilizados para:
          </LegalParagraph>
          <LegalList>
            <LegalListItem>responder solicitações enviadas pelo usuário;</LegalListItem>
            <LegalListItem>entrar em contato quando solicitado;</LegalListItem>
            <LegalListItem>prestar atendimento comercial;</LegalListItem>
            <LegalListItem>melhorar a experiência de navegação;</LegalListItem>
            <LegalListItem>analisar métricas de uso do site;</LegalListItem>
            <LegalListItem>garantir a segurança da plataforma;</LegalListItem>
            <LegalListItem>cumprir obrigações legais.</LegalListItem>
          </LegalList>
          <LegalParagraph>
            A Logarithm não utiliza dados pessoais para decisões automatizadas que produzam efeitos
            jurídicos sobre o usuário.
          </LegalParagraph>
        </LegalSection>

        <LegalSection id="compartilhamento-de-dados" title="4. Compartilhamento de dados">
          <LegalParagraph>Os dados pessoais não são vendidos nem comercializados.</LegalParagraph>
          <LegalParagraph>
            Poderemos compartilhar informações apenas quando necessário com:
          </LegalParagraph>
          <LegalList>
            <LegalListItem>provedores de hospedagem;</LegalListItem>
            <LegalListItem>serviços de análise de acesso;</LegalListItem>
            <LegalListItem>plataformas de envio de formulários;</LegalListItem>
            <LegalListItem>autoridades públicas, quando houver obrigação legal.</LegalListItem>
          </LegalList>
          <LegalParagraph>
            Todos os parceiros utilizados seguem padrões adequados de segurança e proteção de dados.
          </LegalParagraph>
        </LegalSection>

        <LegalSection id="cookies" title="5. Cookies">
          <LegalParagraph>Este site pode utilizar cookies para:</LegalParagraph>
          <LegalList>
            <LegalListItem>funcionamento da plataforma;</LegalListItem>
            <LegalListItem>análise estatística;</LegalListItem>
            <LegalListItem>melhoria da experiência de navegação.</LegalListItem>
          </LegalList>
          <LegalParagraph>
            Sempre que aplicável, o usuário poderá gerenciar ou desabilitar cookies diretamente em
            seu navegador.
          </LegalParagraph>
        </LegalSection>

        <LegalSection id="armazenamento-e-seguranca" title="6. Armazenamento e segurança">
          <LegalParagraph>
            Adotamos medidas técnicas e organizacionais para proteger os dados pessoais contra acesso
            não autorizado, alteração, perda ou divulgação indevida.
          </LegalParagraph>
          <LegalParagraph>
            Embora nenhuma tecnologia seja totalmente imune a riscos, buscamos aplicar boas práticas
            de segurança compatíveis com o estado atual da tecnologia.
          </LegalParagraph>
        </LegalSection>

        <LegalSection id="direitos-do-titular" title="7. Direitos do titular">
          <LegalParagraph>Nos termos da LGPD, o usuário poderá solicitar:</LegalParagraph>
          <LegalList>
            <LegalListItem>confirmação da existência de tratamento;</LegalListItem>
            <LegalListItem>acesso aos dados pessoais;</LegalListItem>
            <LegalListItem>correção de dados incompletos ou incorretos;</LegalListItem>
            <LegalListItem>anonimização, bloqueio ou eliminação quando aplicável;</LegalListItem>
            <LegalListItem>portabilidade dos dados;</LegalListItem>
            <LegalListItem>
              revogação do consentimento, quando este for a base legal utilizada;
            </LegalListItem>
            <LegalListItem>informações sobre compartilhamento de dados.</LegalListItem>
          </LegalList>
        </LegalSection>

        <LegalSection id="links-para-sites-de-terceiros" title="8. Links para sites de terceiros">
          <LegalParagraph>Este site pode conter links para plataformas externas.</LegalParagraph>
          <LegalParagraph>
            A Logarithm não se responsabiliza pelas políticas de privacidade ou práticas adotadas por
            terceiros.
          </LegalParagraph>
          <LegalParagraph>
            Recomendamos que o usuário consulte a política de privacidade de cada serviço acessado.
          </LegalParagraph>
        </LegalSection>

        <LegalSection id="alteracoes-desta-politica" title="9. Alterações desta política">
          <LegalParagraph>
            Esta Política poderá ser atualizada periodicamente para refletir mudanças legais, técnicas
            ou operacionais.
          </LegalParagraph>
          <LegalParagraph>
            A versão mais recente estará sempre disponível nesta página.
          </LegalParagraph>
        </LegalSection>

        <LegalSection id="contato" title="10. Contato">
          <LegalParagraph>
            Caso tenha dúvidas sobre esta Política de Privacidade ou sobre o tratamento de seus dados
            pessoais, entre em contato pelos canais oficiais da Logarithm.
          </LegalParagraph>
          <LegalParagraph>
            <span className="font-semibold">E-mail:</span>{' '}
            <a href="mailto:logarithm.ltda@gmail.com" className="hover:underline">
              logarithm.ltda@gmail.com
            </a>
          </LegalParagraph>
        </LegalSection>

        <LegalSection id="tecnologias-utilizadas" title="11. Tecnologias utilizadas">
          <LegalParagraph>
            Este site pode utilizar tecnologias de terceiros para oferecer uma melhor experiência de
            navegação, incluindo ferramentas de hospedagem, monitoramento de desempenho, análise de
            acesso e integração com serviços externos.
          </LegalParagraph>
          <LegalParagraph>
            Sempre que possível, selecionamos fornecedores que adotem boas práticas de segurança e
            conformidade com a legislação aplicável.
          </LegalParagraph>
        </LegalSection>
      </LegalContent>
    </LegalPage>
  );
};

export default PrivacyPolicy;
