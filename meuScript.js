const meuPrimeiroApp = Vue.createApp({
    data() {
        return {
            nome: '',
            facul: '',
            curso: '',
            OBS: '',
            RA:'',
            CPF: '',
            RG: '',
            DtNas: '',
            DtMatri:'',
            sexo: '',
            AnoDoCurso: ''
        }
    }
})
const mountedApp = meuPrimeiroApp.mount('#divPrincipal')