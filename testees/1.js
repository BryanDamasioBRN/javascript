velocidade_atual_veiculo = 67
local_onde_carro_se_encontra = 94     
faixa_pedreste = 1
radar = 60
local_do_radar = 100

if (local_onde_carro_se_encontra === local_do_radar + faixa_pedreste || local_do_radar - faixa_pedreste && velocidade_atual_veiculo > radar){
    console.log("Você passou do permitido")
} 
else if(local_onde_carro_se_encontra < local_do_radar || local_onde_carro_se_encontra > local_do_radar){
    console.log("Você está na velocidade permitida")
}
