import {
  LegalPage,
  LegalHeader,
  LegalSection,
  LegalParagraph,
  LegalContent,
  LegalList,
  LegalListItem,
} from 'src/components/LegalDocument';
import CheckIcon from 'public/icons/check.svg';
import TrashIcon from 'public/icons/trash.svg';

const InfoCard = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`border-brand-675 bg-brand-725 3xl:rounded-[1.666vw] 3xl:p-[1.666vw] 3xl:border-[0.139vw] rounded-2xl border-2 p-4 md:rounded-4xl md:p-8 ${className}`}
  >
    {children}
  </div>
);

const StepItem = ({ number, children }: { number: number; children: React.ReactNode }) => (
  <div className="3xl:gap-[.833vw] flex items-center gap-4">
    <span className="bg-brand-675/50 border-brand-675 /75 3xl:h-[2.499vw] 3xl:w-[2.499vw] 3xl:border-[.105vw] 3xl:text-[.833vw] inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 text-base font-bold text-white/50">
      {number}
    </span>
    <p className="text-gradient text-gradient-white 3xl:text-[1.25vw] text-base md:text-2xl">
      {children}
    </p>
  </div>
);

const TagCard = ({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div
    className={`border-brand-675 bg-brand-725 3xl:rounded-[1.666vw] 3xl:p-[1.666vw] 3xl:border-[0.139vw] w-full items-center rounded-2xl border-2 p-4 md:rounded-4xl md:p-8`}
  >
    <div
      className={`text-gradient text-gradient-white 3xl:text-[1.25vw] 3xl:gap-[.417vw] flex gap-2 text-base md:text-2xl ${className}`}
    >
      {children}
    </div>
  </div>
);

export default function ExclusaoDeDados() {
  return (
    <LegalPage>
      <LegalHeader title="Exclusão de Dados" lastUpdated="24 de maio de 2026" />

      <LegalContent ariaLabel="Detalhes da Exclusão de Dados">
        <LegalSection id="introducao" title="Solicitação de Exclusão de Dados — Aplicativo +Eu">
          <LegalParagraph>
            Este documento explica como você pode solicitar a exclusão dos seus dados pessoais
            associados ao aplicativo +Eu (aplicativo de checklists inteligentes com localização em
            segundo plano), desenvolvido pela Logarithm.
          </LegalParagraph>
        </LegalSection>

        <LegalSection id="metodo-1" title="Método 1 — Pelo aplicativo">
          <InfoCard className="3xl:space-y-[.833vw] space-y-2 md:space-y-4">
            <StepItem number={1}>
              Abra o aplicativo <span className="">+Eu</span>
            </StepItem>
            <StepItem number={2}>Faça login na sua conta.</StepItem>
            <StepItem number={3}>
              Acesse: <span className="">Perfil → Excluir Conta</span>
            </StepItem>
            <StepItem number={4}>Confirme sua senha e a exclusão.</StepItem>
            <StepItem number={5}>
              A exclusão será processada <span className="">automaticamente.</span>
            </StepItem>
          </InfoCard>
        </LegalSection>

        <LegalSection id="metodo-2" title="Método 2 — Solicitação manual por e-mail">
          <LegalParagraph>
            Caso não consiga acessar o aplicativo, envie um e-mail para:
          </LegalParagraph>

          <TagCard className="flex-col">
            <span className="w-full font-semibold">E-mail:</span>
            <a href="mailto:logarithm.ltda@gmail.com" className="hover:underline">
              logarithm.ltda@gmail.com
            </a>
          </TagCard>

          <TagCard className="flex-col">
            <span className="w-full font-semibold">Assunto:</span>
            <span>Solicitação de Exclusão de Conta - App +Eu</span>
          </TagCard>

          <TagCard className="flex-col">
            <span className="w-full font-semibold">Informações necessárias:</span>
            <LegalList>
              <LegalListItem>Nome completo</LegalListItem>
              <LegalListItem>E-mail cadastrado no aplicativo</LegalListItem>
            </LegalList>
          </TagCard>
        </LegalSection>

        <LegalSection id="dados-excluidos" title="Dados excluídos">
          <LegalParagraph>
            Ao excluir sua conta, os seguintes dados são removidos permanentemente:{' '}
          </LegalParagraph>
          <div className="3xl:grid-cols-3 3xl:gap-[.833vw] grid auto-rows-fr grid-cols-1 gap-2 md:grid-cols-2 md:gap-4">
            <TagCard>
              <CheckIcon className="3xl:h-[1.666vw] 3xl:w-[1.666vw] h-8 w-8 text-green-600" />{' '}
              <span>Dados de autenticação</span>
            </TagCard>
            <TagCard>
              <CheckIcon className="3xl:h-[1.666vw] 3xl:w-[1.666vw] h-8 w-8 text-green-600" />{' '}
              <span>Perfil do usuário</span>
            </TagCard>
            <TagCard>
              <CheckIcon className="3xl:h-[1.666vw] 3xl:w-[1.666vw] h-8 w-8 text-green-600" />{' '}
              <span>Preferências salvas</span>
            </TagCard>
            <TagCard>
              <CheckIcon className="3xl:h-[1.666vw] 3xl:w-[1.666vw] h-8 w-8 text-green-600" />{' '}
              <span>Cofre de senhas</span>
            </TagCard>
            <TagCard>
              <CheckIcon className="3xl:h-[1.666vw] 3xl:w-[1.666vw] h-8 w-8 text-green-600" />{' '}
              <span>Dados de veículos</span>
            </TagCard>
            <TagCard>
              <CheckIcon className="3xl:h-[1.666vw] 3xl:w-[1.666vw] h-8 w-8 text-green-600" />{' '}
              <span>Checklists personalizados</span>
            </TagCard>
            <TagCard>
              <CheckIcon className="3xl:h-[1.666vw] 3xl:w-[1.666vw] h-8 w-8 text-green-600" />{' '}
              <span>Histórico associado à conta</span>
            </TagCard>
          </div>
        </LegalSection>

        <LegalSection id="exclusao-parcial-de-dados" title="Exclusão Parcial de Dados">
          <LegalParagraph>
            O aplicativo +Eu também permite que os usuários solicitem a exclusão de dados
            específicos sem remover completamente a conta.
          </LegalParagraph>
          <LegalParagraph>
            Entre os dados que podem ser excluídos individualmente estão:
          </LegalParagraph>

          <div className="3xl:gap-[.833vw] grid auto-rows-fr grid-cols-1 gap-2 md:grid-cols-2 md:gap-4">
            <TagCard>
              <TrashIcon className="text-brand-350 3xl:h-[1.666vw] 3xl:w-[1.666vw] h-8 w-8" />{' '}
              <span>Histórico de veículos</span>
            </TagCard>
            <TagCard>
              <TrashIcon className="text-brand-350 3xl:h-[1.666vw] 3xl:w-[1.666vw] h-8 w-8" />{' '}
              <span>Preferências salvas</span>
            </TagCard>
            <TagCard>
              <TrashIcon className="text-brand-350 3xl:h-[1.666vw] 3xl:w-[1.666vw] h-8 w-8" />{' '}
              <span>Dados armazenados localmente</span>
            </TagCard>
            <TagCard>
              <TrashIcon className="text-brand-350 3xl:h-[1.666vw] 3xl:w-[1.666vw] h-8 w-8" />{' '}
              <span>Cofre de senhas</span>
            </TagCard>
          </div>

          <div className="3xl:gap-[.833vw] 3xl:mt-[.833] mt-2 flex flex-col gap-2 md:mt-4 md:gap-4">
            <InfoCard className="/50 w-full">
              <div className="text-gradient text-gradient-white 3xl:text-[1.25vw] text-base md:text-2xl">
                As solicitações podem ser feitas diretamente pelo aplicativo ou pelo e-mail:{' '}
                <a href="mailto:logarithm.ltda@gmail.com" className="font-semibold hover:underline">
                  logarithm.ltda@gmail.com
                </a>
                .
              </div>
            </InfoCard>
          </div>
        </LegalSection>

        <LegalSection id="dados-mantidos-temporariamente-1" title="Dados mantidos temporariamente">
          <LegalParagraph>
            Os seguintes dados podem ser mantidos por obrigação legal ou operacional:
          </LegalParagraph>

          <div className="3xl:gap-[.833vw] flex flex-col gap-2 md:gap-4">
            <TagCard className="flex-col">
              <span className="w-full font-semibold">Dados financeiros</span>
              <span>
                Informações relacionadas a assinaturas e compras realizadas via Google Play podem
                ser mantidas para fins fiscais e contábeis.
              </span>
            </TagCard>

            <TagCard className="flex-col">
              <span className="w-full font-semibold">Backups automáticos</span>
              <span>
                Backups de segurança do Firebase podem armazenar registros temporariamente por até
                30 dias antes da exclusão definitiva.
              </span>
            </TagCard>
          </div>
        </LegalSection>

        <LegalSection id="contato" title="Contato">
          <LegalParagraph>Caso tenha dúvidas sobre o processo de exclusão de dados:</LegalParagraph>

          <div className="3xl:gap-[.833vw] flex flex-col gap-4">
            <InfoCard className="/50 w-full">
              <div className="text-gradient text-gradient-white 3xl:text-[1.25vw] text-base md:text-2xl">
                E-mail:{' '}
                <a href="mailto:logarithm.ltda@gmail.com" className="font-semibold hover:underline">
                  logarithm.ltda@gmail.com
                </a>
                .
              </div>
            </InfoCard>
          </div>
        </LegalSection>
      </LegalContent>
    </LegalPage>
  );
}
