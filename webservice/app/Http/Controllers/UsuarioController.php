<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use Exception;
use Illuminate\Support\Facades\Hash;

class UsuarioController extends Controller {

    public function create(Request $request)
    {
        $data = $request->all();
        $data['password'] = Hash::make($data['password']);
        if(User::query()->where("email", $request->post('email'))->first()) {
            return response()->json(["status" => false, "message" => "Este e-mail já existe"]);
        }
        $usuario = (new User())->fill($data);
        if($usuario->save()) {
            return response()->json([
                "status" => true,
                "message" => "Cadastrado com sucesso"
            ], 200);
        } else {
            return response()->json(["status" => false, "message" => "Erro ao se cadastrar"]);;
        }
    }
}
