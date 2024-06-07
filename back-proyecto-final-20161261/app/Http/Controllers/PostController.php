<?php

namespace App\Http\Controllers;

use App\Models\Post;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //$posts = Post::all();
        //return response()->json($posts);

        $posts = Post::with('user')->get();
        return response()->json($posts);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //$randomUser = User::inRandomOrder()->first();
        $post = Post::create([
            'titulo' => $request->input('titulo'),
            'contenido' => $request->input('contenido'),
            'user_id' => $request->user()->id
            //'user_id' => $randomUser->id
        ]);
        
        if ($request->hasFile('images')) {
            $files = $request->file('images');

            if (is_array($files) && count($files) > 0) {
                foreach ($files as $file) {
                    $filename = time() . '_' . $file->getClientOriginalName();
                    $filePath = 'images/' . $filename;
                    Storage::disk('public')->putFileAs('images', $file, $filename);
                    $post->images()->create([
                        'url' => $filePath,
                    ]);
                }
            }
        }
        
        return response()->json($post);        
        
    }

    

    /**
     * Display the specified resource.
     */
    public function show(Post $post)
    {
        //return response()->json($post);
        $respost = Post::with('user')->where('id', $post->id)->first();
        return response()->json($respost);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        $post->update([
            'titulo' => $request->input('titulo'),
            'contenido' => $request->input('contenido'),
            'user_id' => $request->user()->id
        ]);

        return response()->json($post);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Post $post)
    {
        $post->delete();
        return response()->json("Post eliminado");
    }
}
