import {
  LegalPage,
  LegalHeader,
  LegalContent,
  LegalSection,
  LegalParagraph,
  LegalList,
  LegalListItem,
} from 'src/components/LegalDocument';

const PrivacyPolicyMaisEu = () => {
  return (
    <LegalPage>
      <LegalHeader title="Política de Privacidade" lastUpdated="24 de maio de 2026" />

      <LegalContent ariaLabel="Detalhes da Política de Privacidade">
        <LegalSection id="introducao" title="Introdução">
          <LegalParagraph>
            Bem-vindo ao +Eu (doravante denominado &quot;Aplicativo&quot;), de propriedade e operado pela
            empresa Logarithm (doravante denominada &quot;Desenvolvedor&quot;, &quot;Empresa&quot; ou &quot;Nós&quot;). Nós
            valorizamos a sua privacidade e estamos empenhados em proteger os seus dados pessoais.
          </LegalParagraph>
          <LegalParagraph>
            Esta Política de Privacidade explica como coletamos, usamos, armazenamos e
            compartilhamos suas informações de acordo com as diretrizes da Lei Geral de Proteção de
            Dados (LGPD - Lei nº 13.709/2018) e os requisitos exigidos pela Google Play Store.
          </LegalParagraph>
          <LegalParagraph>
            Ao instalar e utilizar o Aplicativo +Eu, você concorda com a coleta e o uso de
            informações de acordo com esta política.
          </LegalParagraph>
        </LegalSection>

        <LegalSection id="informacoes-que-coletamos" title="1. Informações que Coletamos">
          <LegalParagraph>
            Para fornecer nossos serviços e garantir a melhor experiência possível, o Aplicativo
            coleta os seguintes tipos de informações:
          </LegalParagraph>

          <LegalParagraph>
            <span className="font-semibold">
              A. Dados da Conta e Cadastro (Fornecidos por Você)
            </span>
          </LegalParagraph>
          <LegalList>
            <LegalListItem>
              <span className="font-semibold">Informações de Login:</span> E-mail e senha inseridos
              para fins de cadastro, autenticação e login no aplicativo.
            </LegalListItem>
            <LegalListItem>
              <span className="font-semibold">Informações de Perfil:</span> Configurações
              personalizadas por você dentro do aplicativo (por exemplo, preferências de
              notificação).
            </LegalListItem>
          </LegalList>

          <LegalParagraph>
            <span className="font-semibold">
              B. Dados de Localização (Incluindo Localização em Segundo Plano)
            </span>
          </LegalParagraph>
          <LegalList>
            <LegalListItem>
              <span className="font-semibold">Finalidade Específica:</span> O aplicativo coleta
              dados de localização exata (GPS) e aproximada do seu dispositivo.
            </LegalListItem>
            <LegalListItem>
              <span className="font-semibold">Localização em Segundo Plano:</span> O +Eu requer
              permissão de acesso à localização em segundo plano (ACCESS_BACKGROUND_LOCATION). Esse
              recurso é estritamente necessário para que o aplicativo identifique quando você sai de
              casa e envie alertas contextuais importantes (notificações inteligentes) lembrando-o
              de revisar seu checklist personalizado antes de sair.
            </LegalListItem>
            <LegalListItem>
              <span className="font-semibold">Controle do Usuário:</span> A coleta de localização
              pode ser ativada ou desativada a qualquer momento através das configurações do seu
              dispositivo móvel ou no menu do aplicativo.
            </LegalListItem>
          </LegalList>

          <LegalParagraph>
            <span className="font-semibold">C. Acesso à Câmera e Gravação de Áudio</span>
          </LegalParagraph>
          <LegalList>
            <LegalListItem>
              <span className="font-semibold">Finalidade Câmera:</span> O aplicativo solicita acesso
              à câmera do seu dispositivo (android.permission.CAMERA) com a finalidade exclusiva de
              escanear produtos e códigos de barras.
            </LegalListItem>
            <LegalListItem>
              <span className="font-semibold">Finalidade Áudio:</span> O acesso ao áudio
              (android.permission.RECORD_AUDIO) é solicitado exclusivamente se você optar por usar
              recursos que requeiram entrada de voz.
            </LegalListItem>
            <LegalListItem>
              <span className="font-semibold">Privacidade Local:</span> Nenhuma imagem capturada
              pela câmera ou áudio gravado é enviado ou armazenado em servidores externos para
              outros fins sem o seu consentimento explícito.
            </LegalListItem>
          </LegalList>

          <LegalParagraph>
            <span className="font-semibold">D. Dados Biométricos</span>
          </LegalParagraph>
          <LegalList>
            <LegalListItem>
              <span className="font-semibold">Finalidade:</span> O aplicativo pode solicitar acesso
              aos recursos de biometria ou reconhecimento facial do seu dispositivo (USE_BIOMETRIC,
              USE_FINGERPRINT).
            </LegalListItem>
            <LegalListItem>
              <span className="font-semibold">Segurança no Cofre:</span> Esta permissão é utilizada
              exclusivamente para proteger e autenticar o acesso às suas senhas no recurso &quot;Cofre&quot;
              do aplicativo.
            </LegalListItem>
            <LegalListItem>
              <span className="font-semibold">Processamento Local:</span> As informações biométricas
              são processadas de forma 100% segura pelo próprio sistema operacional do seu
              dispositivo móvel. O Aplicativo não tem acesso aos seus dados biométricos reais e eles
              nunca são enviados para os nossos servidores.
            </LegalListItem>
          </LegalList>

          <LegalParagraph>
            <span className="font-semibold">
              E. Dados de Pagamento e Assinaturas (Compras no App)
            </span>
          </LegalParagraph>
          <LegalList>
            <LegalListItem>
              <span className="font-semibold">Finalidade:</span> Para viabilizar compras de
              assinaturas premium e processar pagamentos na Play Store.
            </LegalListItem>
            <LegalListItem>
              <span className="font-semibold">Processamento de Terceiros:</span> Utilizamos os
              serviços de intermediação da RevenueCat para gerenciar e validar assinaturas. As
              transações financeiras reais são processadas e seguras diretamente pelo ecossistema da
              Google Play Store. Não armazenamos nem coletamos os dados do seu cartão de crédito ou
              outros meios de pagamento.
            </LegalListItem>
          </LegalList>
        </LegalSection>

        <LegalSection id="tecnologias-de-terceiros" title="2. Tecnologias de Terceiros Utilizadas">
          <LegalParagraph>
            Para o funcionamento correto das funcionalidades de nuvem, sincronização e pagamentos,
            integramos os seguintes serviços terceiros confiáveis, que tratam os dados em
            conformidade com suas próprias políticas de segurança:
          </LegalParagraph>
          <LegalList>
            <LegalListItem>
              <span className="font-semibold">
                Google Firebase (Firebase Auth, Cloud Firestore, Cloud Messaging):
              </span>{' '}
              Objetivo: Armazenamento em nuvem de checklists, dados de veículos cadastrados
              (histórico FIPE), autenticação de conta (e-mail/senha) e envio de notificações push.
              Os dados são transmitidos de forma criptografada e armazenados de maneira segura em
              servidores Google.
            </LegalListItem>
            <LegalListItem>
              <span className="font-semibold">RevenueCat:</span> Objetivo: Gerenciamento, controle
              de transações, verificação e ativação dos planos premium da loja Google Play.
            </LegalListItem>
            <LegalListItem>
              <span className="font-semibold">Google Play Services:</span> Objetivo: Utilizado para
              serviços de localização e mapas internos do aplicativo.
            </LegalListItem>
          </LegalList>
        </LegalSection>

        <LegalSection id="como-usamos-seus-dados" title="3. Como Usamos Seus Dados">
          <LegalParagraph>
            Utilizamos as informações coletadas para as seguintes finalidades legítimas:
          </LegalParagraph>
          <LegalList>
            <LegalListItem>
              Proporcionar o funcionamento das ferramentas de checklist e do &quot;Cofre&quot; de senhas.
            </LegalListItem>
            <LegalListItem>
              Notificar de forma inteligente quando você sai de áreas geográficas pré-definidas (sua
              residência).
            </LegalListItem>
            <LegalListItem>
              Monitorar valores de veículos cadastrados por você na tabela FIPE periodicamente para
              lhe manter atualizado.
            </LegalListItem>
            <LegalListItem>
              Processar suas compras e gerenciar suas assinaturas premium através da Play Store.
            </LegalListItem>
            <LegalListItem>
              Melhorar a usabilidade, segurança e o suporte técnico do Aplicativo.
            </LegalListItem>
          </LegalList>
        </LegalSection>

        <LegalSection id="compartilhamento-de-dados" title="4. Compartilhamento de Dados">
          <LegalParagraph>
            Nós não vendemos, alugamos ou comercializamos seus dados pessoais com terceiros.
          </LegalParagraph>
          <LegalParagraph>
            Seus dados só serão compartilhados com os provedores de serviços descritos na Seção 2
            (Firebase e RevenueCat) estritamente na medida necessária para viabilizar as funções
            essenciais do aplicativo, ou quando exigido por lei por autoridades governamentais
            judiciais competentes.
          </LegalParagraph>
        </LegalSection>

        <LegalSection id="armazenamento-e-seguranca" title="5. Armazenamento e Segurança dos Dados">
          <LegalParagraph>
            Adotamos medidas rígidas de segurança técnica e organizacional para proteger seus dados
            contra acessos não autorizados, alteração, divulgação ou destruição ilegal.
          </LegalParagraph>
          <LegalList>
            <LegalListItem>
              Os dados pessoais armazenados no Firebase são regidos pelos rigorosos termos de
              segurança do Google Cloud Platform.
            </LegalListItem>
            <LegalListItem>
              As senhas e dados do seu &quot;Cofre&quot; biométrico utilizam as APIs nativas do sistema (iOS
              Keychain / Android Keystore) e do módulo expo-secure-store, garantindo criptografia em
              nível de dispositivo.
            </LegalListItem>
          </LegalList>
        </LegalSection>

        <LegalSection
          id="seus-direitos-de-privacidade"
          title="6. Seus Direitos de Privacidade (LGPD)"
        >
          <LegalParagraph>
            Você possui plenos direitos garantidos pela Lei Geral de Proteção de Dados (LGPD),
            incluindo o direito de:
          </LegalParagraph>
          <LegalList>
            <LegalListItem>
              Confirmar a existência de tratamento e acessar os seus dados coletados.
            </LegalListItem>
            <LegalListItem>Corrigir dados incompletos, inexatos ou desatualizados.</LegalListItem>
            <LegalListItem>
              <span className="font-semibold">Exclusão total de dados:</span> Você pode excluir a
              sua conta e todos os dados associados a qualquer momento dentro do menu de
              configurações do Aplicativo ou solicitando diretamente por e-mail.
            </LegalListItem>
            <LegalListItem>
              Revogar o seu consentimento para o uso de permissões específicas (como Câmera ou
              Localização em Segundo Plano) diretamente nos ajustes do seu dispositivo.
            </LegalListItem>
          </LegalList>
        </LegalSection>

        <LegalSection
          id="alteracoes-nesta-politica"
          title="7. Alterações Nesta Política de Privacidade"
        >
          <LegalParagraph>
            Podemos atualizar nossa Política de Privacidade periodicamente. Avisaremos você sobre
            quaisquer alterações publicando a nova versão nesta página e atualizando a data de
            &quot;Última atualização&quot; no início deste documento. Recomendamos a revisão periódica desta
            página.
          </LegalParagraph>
        </LegalSection>

        <LegalSection id="contato" title="8. Contato">
          <LegalParagraph>
            Se você tiver alguma dúvida sobre esta Política de Privacidade ou sobre o tratamento dos
            seus dados pelo aplicativo +Eu, entre em contato pelo e-mail do suporte:
          </LegalParagraph>
          <LegalParagraph>
            <span className="font-semibold">E-mail de Suporte:</span>{' '}
            <a href="mailto:logarithm.ltda@gmail.com" className="hover:underline">
              logarithm.ltda@gmail.com
            </a>
          </LegalParagraph>
          <LegalParagraph>
            <span className="font-semibold">Empresa Desenvolvedora:</span> Logarithm
          </LegalParagraph>
        </LegalSection>
      </LegalContent>
    </LegalPage>
  );
};

export default PrivacyPolicyMaisEu;
