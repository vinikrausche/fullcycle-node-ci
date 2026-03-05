function main(){
    console.log("O total é:",sum(1,2))
}

function sum(a,b){
    return a+b
}

if (require.main === module) {
    main()
}

module.exports = { sum }
