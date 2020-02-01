<?php


namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;

class ContatoController extends Controller {

    public function index($id)
    {
        $usuario = User::query()->where("id_usuario", $id)->first();
        return response()->json($usuario->contatos);
    }

    public function create(Request $request)
    {
        $data = $request->all();
        $id_usuario = $data['id_usuario'];
        $contato_id = $data['contato_id'];

        $usuario = User::query()->where("id_usuario", $id_usuario)->first();
        $contato = User::query()->where("id_usuario", $contato_id)->first();

        $usuario->contatos()->attach($contato->id);
        return response()->json(["status", true]);
    }
}
