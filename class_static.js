class MyClassName {
    setName(name) {
        this.name = name
}
speak() {
    console.log(`Henry is my name ${this.name}`)

    }
}
const thing = new MyClassName()
thing.setName("I said my name is Henry")
thing.speak()