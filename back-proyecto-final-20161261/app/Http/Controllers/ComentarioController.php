<?php

namespace App\Http\Controllers;

use App\Models\Comentario;
use Illuminate\Http\Request;

class ComentarioController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $comentarios = Comentario::all();
        return response()->json($comentarios);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $comentario = Comentario::create([
            'contenido' => $request->input('contenido'),
            'likes' => $request->input('likes'),
            'dislikes' => $request->input('dislikes'),
            //'post_id' => $request->post()->id
        ]);
        return response()->json($comentario);
    }

    /**
     * Display the specified resource.
     */
    public function show(Comentario $comentario)
    {
        return response()->json($comentario);
    }

    public function mostrarComentarios($post_id)
    {
        //$comments = Comentario::where('post_id', $post_id)->get();
        //return response()->json($comments);
        $comments = Comentario::with('replies')->where('post_id', $post_id)->get();
        return response()->json($comments);
    }

    public function hacerComentario(Request $request, $post_id)
    {
        $comentario = new Comentario();
        $comentario->contenido = $request->input('contenido');
        $comentario->post_id = $post_id;
        $comentario->save();

        return response()->json(['message' => 'Comentario creado correctamente']);
    }


    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Comentario $comentario)
    {
        $comentario->update([
            'contenido' => $request->input('contenido'),
            'likes' => $request->input('likes'),
            'dislikes' => $request->input('dislikes'),
            //'post_id' => $request->post()->id
        ]);
        return response()->json($comentario);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Comentario $comentario)
    {
        $comentario->delete();
        return response()->json("Comentario eliminado");
    }
}
