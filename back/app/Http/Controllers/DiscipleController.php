<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Disciple;

class DiscipleController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Disciple::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $disciple = new Disciple();
        $disciple->class = $request->class;
        $disciple->type = $request->type;
        $disciple->description = $request->description;
        $disciple->save();
        
        return response()->json(['message' =>'Created', 'data' => $disciple], 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Disciple::findOrFail($id);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $disciple = new Disciple();
        $disciple->class = $request->class;
        $disciple->type = $request->type;
        $disciple->description = $request->description;

        $disciple->save();
        return response()->json(['message' =>'Updated', 'data' => $disciple], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return Disciple::destroy($id);
    }
    public function search($class)
    {
        return Disciple::where('class', $class)->get();
    }
}
