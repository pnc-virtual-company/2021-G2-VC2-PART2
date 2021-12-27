<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Permission;

class PermissionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Permission::all();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $permission = new Permission();
        $permission->class = $request->class;
        $permission->startAt = $request->startAt;
        $permission->endAt = $request->endAt;
        $permission->type = $request->type;
        $permission->description = $request->description;

        $permission->save();
        return response()->json('Permission Created');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return Permission::findOrFail($id);
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
        $permission = new Permission();
        $permission->class = $request->class;
        $permission->startAt = $request->startAt;
        $permission->endAt = $request->endAt;
        $permission->type = $request->type;
        $permission->description = $request->description;

        $permission->save();
        return response()->json(['message' =>'Updated', 'data' => $permission], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return Permission::destroy($id);   
    }

    /**
   
     *
     * @param  string  $id
     * @return \Illuminate\Http\Response
     */
    public function search($class)
    {
        return Permission::where('class', $class)->get();
    }
}
