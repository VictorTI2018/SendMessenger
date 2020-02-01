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
        $usuario = (new User())->fill($data);
        if($usuario->save()) {
            return response()->json([
                "message" => "Cadastrado com sucesso"
            ], 200);
        } else {
            throw new Exception("Error ao se cadastrar");
        }
    }
}
