<?php

namespace App\Http\Controllers;

use App\User;
use Exception;
use Tymon\JWTAuth\JWTAuth;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class LoginController extends Controller
{

    protected $jwt;

    public function __construct(JWTAuth $jwt)
    {
        $this->jwt = $jwt;
    }

    public function credentials(Request $request)
    {
        return [
            'email' => $request->post('email'),
            'password' => $request->post('password')
        ];
    }

    public function authenticate(Request $request)
    {
        $credential = $this->credentials($request);
        if (!($token = $this->jwt->attempt($credential))) {
            return false;
        }

        return $token;
    }

    public function responseToken(User $user, string $token)
    {
        return response()->json(["user" => $user, "token" => $token]);
    }

    public function login(Request $request)
    {
        $user = User::query()->where("email", $request->post("email"))->first();
        if ($user) {
            if (Hash::check($request->post("password"), $user->password)) {
                $token = $this->authenticate($request);
                if ($token) {
                    return $this->responseToken($user, $token);
                } else {
                    throw new Exception("Credencias inválidas");
                }
            } else {
                throw new Exception("Senha inválida");
            }
        } else {
            throw new Exception("Email inválido");
        }

    }
}
