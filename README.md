# Kit Digital — Japiim Digital

Página estática de apoio aos pesquisadores comunitários, seguindo a identidade do índice Japiim: verde/turquesa, fundo claro, logo oficial e cartões arredondados. Funciona sem dependências, ferramentas de build, cookies ou coleta de dados.

## Publicação no GitHub Pages

Após revisar e integrar esta branch na `main`:

1. Abra **Settings → Pages**.
2. Em **Build and deployment**, escolha **Deploy from a branch**.
3. Selecione a branch **main** e a pasta **/docs**. Salve.
4. Aguarde o deploy do GitHub Pages.

O endereço padrão será **https://josibatista.github.io/japiim-digital/**.
Para usar **https://josibatista.github.io/japiim-digital-kit-digital/**, será necessário renomear o repositório para `japiim-digital-kit-digital` em Settings → General. Essa alteração não foi realizada. Todos os links locais são relativos e continuam funcionando se o repositório mudar de nome.

Somente `docs/` deve ser publicado. O formulário original foi preservado, sem alterações, em `rascunho-questionário.html`, fora da pasta publicada. O questionário do README anterior está preservado em `questionario.md`. O `_config.yml` também exclui esses arquivos de uma eventual publicação pela raiz usando Jekyll. O `index.html` da raiz redireciona para o kit em `docs/` para compatibilidade com a configuração anterior.

**Fora do Pages não significa privado:** o repositório e o histórico Git são públicos. Para sigilo do código do rascunho, é necessário armazenamento privado. Renomear ou excluir arquivos não remove versões do histórico.

## Arquivos

- `docs/index.html`: conteúdo do kit.
- `docs/assets/style.css`: estilos responsivos e impressão.
- `docs/assets/navigation.js`: abre as orientações por links e fragmentos.
- `docs/assets/japiim-logo.png`: logo do site institucional do Japiim.
- `docs/materiais/`: cartilha, TCLE, TALE e autorização de imagem/áudio em PDF.

Os cinco PDFs enviados pela equipe estão vinculados aos botões de leitura e download:

- `cartilha-japiim-digital.pdf`: cartilha do projeto.
- `TCLE_Japiim-Digital.pdf`: consentimento.
- `TALE_Japiim-Digital_menor-de-idade.pdf`: assentimento.
- `guia-de-gravacao.pdf`: orientações de mídia.
- `termo-autorizacao-de-imagem-audio.pdf`: autorização de imagem e áudio.

Não armazene termos preenchidos ou mídias de participantes neste repositório público.

## Atualizações e prévia local

Atualize textos no HTML e substitua os PDFs mantendo seus nomes para preservar os links. Nenhum número de WhatsApp foi presumido; a página orienta utilizar o contato da Josiane já conhecido pela equipe.

Execute `python3 -m http.server 5174 --directory docs` e acesse `http://localhost:5174`. Os links de leitura abrem os PDFs no navegador; os links com `download` solicitam o download, conforme o suporte do navegador. As orientações em `<details>` funcionam mesmo sem JavaScript.
