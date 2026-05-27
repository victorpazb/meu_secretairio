import type { ToolTab } from './types/tool'
import type { Language } from './composables/useLanguage'

type TranslationSet = {
  header: {
    kicker: string
    subtitle: string
    title: string
    themeLight: string
    themeDark: string
  }
  languageToggle: {
    pt: string
    en: string
  }
  controls: {
    generate: string
    generating: string
    copy: string
    copied: string
    pdf: string
    pdfSoon: string
  }
  fields: {
    input: string
    inputPlaceholder: string
    result: string
    resultEmpty: string
    resultLoading: string
  }
  footer: string
  tabs: Record<ToolTab, string>
  actions: Record<ToolTab, Record<string, string>>
  toasts: {
    pasteBeforeGenerating: string
    unexpectedError: string
  }
}

export const TRANSLATIONS: Record<Language, TranslationSet> = {
  'pt-BR': {
    header: {
      kicker: 'Ferramenta de texto com IA',
      title: 'Meu Secretário',
      subtitle: 'Um espaço tranquilo para revisar, resumir e traduzir textos com foco em clareza.',
      themeLight: 'Modo claro',
      themeDark: 'Modo escuro',
    },
    languageToggle: {
      pt: 'PT-BR',
      en: 'EN-US',
    },
    controls: {
      generate: 'Gerar',
      generating: 'Gerando...',
      copy: 'Copiar',
      copied: 'Resultado copiado!',
      pdf: 'Baixar PDF (em breve)',
      pdfSoon: 'O download em PDF estará disponível em breve.',
    },
    fields: {
      input: 'Entrada',
      inputPlaceholder: 'Cole seu texto aqui...',
      result: 'Resultado',
      resultEmpty: 'O texto gerado aparece aqui.',
      resultLoading: 'Gerando...',
    },
    footer: 'Rápido, simples e pronto para a futura integração com a OpenAI.',
    tabs: {
      corrector: 'Corretor',
      summarizer: 'Resumidor',
      translator: 'Tradutor',
    },
    actions: {
      corrector: {
        formal: 'Formal',
        informal: 'Informal',
        professional: 'Profissional',
        grammar: 'Apenas corrigir gramática',
      },
      summarizer: {
        'short-summary': 'Resumo curto',
        'bullet-points': 'Tópicos',
        'executive-summary': 'Resumo executivo',
        simplify: 'Simplificar texto',
      },
      translator: {
        'pt-en': 'PT → EN',
        'en-pt': 'EN → PT',
        'natural-tone': 'Tom natural',
        'professional-tone': 'Tom profissional',
      },
    },
    toasts: {
      pasteBeforeGenerating: 'Cole um texto antes de gerar.',
      unexpectedError: 'Erro inesperado.',
    },
  },
  'en-US': {
    header: {
      title: 'DeskMate',
      // title: 'My Secretary',
      kicker: 'AI text utility',
      subtitle: 'A calm workspace to review, summarize, and translate text with clarity in mind.',
      themeLight: 'Light mode',
      themeDark: 'Dark mode',
    },
    languageToggle: {
      pt: 'PT-BR',
      en: 'EN-US',
    },
    controls: {
      generate: 'Generate',
      generating: 'Generating...',
      copy: 'Copy',
      copied: 'Result copied!',
      pdf: 'Download PDF (soon)',
      pdfSoon: 'PDF download will be available soon.',
    },
    fields: {
      input: 'Input',
      inputPlaceholder: 'Paste your text here...',
      result: 'Result',
      resultEmpty: 'Generated text appears here.',
      resultLoading: 'Generating...',
    },
    footer: 'Fast, simple, and ready for future OpenAI integration.',
    tabs: {
      corrector: 'Corrector',
      summarizer: 'Summarizer',
      translator: 'Translator',
    },
    actions: {
      corrector: {
        formal: 'Formal',
        informal: 'Informal',
        professional: 'Professional',
        grammar: 'Grammar only',
      },
      summarizer: {
        'short-summary': 'Short summary',
        'bullet-points': 'Bullet points',
        'executive-summary': 'Executive summary',
        simplify: 'Simplify text',
      },
      translator: {
        'pt-en': 'PT → EN',
        'en-pt': 'EN → PT',
        'natural-tone': 'Natural tone',
        'professional-tone': 'Professional tone',
      },
    },
    toasts: {
      pasteBeforeGenerating: 'Paste text before generating.',
      unexpectedError: 'Unexpected error.',
    },
  },
}
