const div = React.createElement('div', { id: 'heading' }, [
  React.createElement('div', { id: 'parent' }, [
    React.createElement('h1', {}, 'I am H1 tag'),
    React.createElement('h2', {}, 'I am H2 tag')
  ]),
  React.createElement('div', { id: 'children' }, [
    React.createElement('h1', {}, 'I am H1 tag'),
    React.createElement('h2', {}, 'I am H2 tag')
  ])
])

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(div)
