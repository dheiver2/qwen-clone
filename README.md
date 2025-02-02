# Clone Qwen

<div align="center">
  <img src="public/logo.png"/>
  
  Um clone minimalista da interface de chat Qwen construído com React e Tailwind CSS.
</div>

## Tecnologias Utilizadas

- React
- Tailwind CSS
- Lucide Icons
- Vite

## Instalação

1. Clone o repositório
```bash
git clone https://github.com/seu-usuario/qwen-clone.git
cd qwen-clone
```

2. Instale as dependências
```bash
npm install
```

3. Inicie o servidor de desenvolvimento
```bash
npm run dev
```

4. Build para produção
```bash
npm run build
```

## Funcionalidades

- Design responsivo
- Componentes UI modernos
- Estilização com Tailwind
- Integração com ícones Lucide

## Como Contribuir

1. Faça um Fork do repositório
2. Crie sua branch de funcionalidade (`git checkout -b feature/NovaFuncionalidade`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova funcionalidade'`)
4. Faça push para a branch (`git push origin feature/NovaFuncionalidade`)
5. Abra um Pull Request

## Capturas de Tela

<div align="center">
  <img src="public/screenshot(2).png"/>
</div>

## Estrutura do Projeto

```
qwen-clone/
├── src/
│   ├── components/
│   │   └── QwenInterface.jsx
│   ├── assets/
│   └── App.jsx
├── public/
│   └── logo.png
└── package.json
```

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Gera a versão de produção
- `npm run preview`: Visualiza a versão de produção localmente

## Customização

### Cores
Para modificar as cores padrão, edite o arquivo `tailwind.config.js`:

```js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#seu-codigo-hex',
      }
    }
  }
}
```

### Componentes
Os componentes podem ser personalizados editando as classes do Tailwind em `QwenInterface.jsx`.

## Recursos Adicionais

- [Documentação do React](https://react.dev)
- [Documentação do Tailwind CSS](https://tailwindcss.com/docs)
- [Lucide Icons](https://lucide.dev)
- [Documentação do Vite](https://vitejs.dev)

## Suporte

Para reportar bugs ou solicitar novas funcionalidades, por favor abra uma [issue](https://github.com/seu-usuario/qwen-clone/issues).

## Licença

Distribuído sob a Licença MIT. Veja `LICENSE` para mais informações.

## Autores

- **Seu Nome** - [seu-usuario](https://github.com/seu-usuario)

## Agradecimentos

- Inspirado na interface Qwen
- Comunidade React
- Contribuidores do Tailwind CSS
- Desenvolvedores do Lucide Icons
