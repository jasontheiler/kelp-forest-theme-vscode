let num = 29
var bool = true
const string = "string"
const template = `something${something}something${something()}`
const regex = /^abc|def[A-Z]$/gim

// comment

class Class extends Some.thing {
  constructor() {
    this.something
  }

  static method() {}
}

const something = new Class()

something.method()

async function func(url) {
  await op()

  fetch(url)
    .then(res => res.json())
    .then(res => console.log(res))

  return
}

func()

console.log()

try {
} catch (err) {}

const obj = {
  a: something,
}

if (something) {
} else if (something) {
} else {
}

switch (something) {
  case "something":
    break
  default:
    break
}

for (let i = 0; i < 10; i++) {}

for (let something of things) {
}

while (something) {}

do {} while (something)

debugger

import something from ""
export default something

return (
  <div className={styles.something}>
    <Something something="something" />

    <ul>
      {items?.map(item => (
        <li key={item.something}>{something}</li>
      ))}
    </ul>
  </div>
)
