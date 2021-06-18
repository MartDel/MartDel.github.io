Vue.config.productionTip = false
Vue.config.devtools = false

window.onload = () => {
    document.getElementById('app').style.display = 'block'
}

function getItemByName(name){
    let result = null
    items.forEach((item) => {
        if (item.name === name) result = item
    })
    return result
}

const app = new Vue({
    el: '#app',
    data: {
        list: [],
        recipe: {},
        main_item_name: 'Item à crafter',
        show_recipe: false
    },
    methods: {
        refactorItemList(){
            let result = []
            items.forEach((item, i) => {
                result.push({id: i, name: item.name, recipe: item.recipe})
            })
            return result
        },
        selectItem(event){
            const target = event.target.parentElement
            const id = target.firstChild.innerText
            const item = items[id]
            if (item.recipe === null) {
                alert('Cet item n\'est pas craftable...')
                return
            }

            // Show item recipe
            this.main_item_name = item.name
            this.recipe = this.getRecipe(item.recipe)
            this.show_recipe = true
        },
        getRecipe(recipe){
            let result = {}
            recipe.forEach((item) => {
                const root_item = getItemByName(item.name)
                if(!root_item) {
                    alert('Error')
                    return {}
                }
                if (root_item.recipe === null) {
                    if (!result.hasOwnProperty(item.name)) result[item.name] = item.amount
                    else result[item.name] += item.amount
                } else {
                    const deep_recipe = this.getRecipe(root_item.recipe)
                    for (let key in deep_recipe) {
                        if (!result.hasOwnProperty(key)) result[key] = deep_recipe[key] * item.amount
                        else result[key] += (deep_recipe[key] * item.amount)
                    }
                }
            })
            return result
        },
        search(event){
            setTimeout(function () {
                const value = event.target.value.toLowerCase()
                let to_show = []
                app.refactorItemList().forEach((item) => {
                    if(item.name.toLowerCase().indexOf(value) != -1){
                        to_show.push(item)
                    }
                })
                app.list = to_show
            }, 10);
        }
    },
    mounted(){
        this.list = this.refactorItemList()
    }
})
