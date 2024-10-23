<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;

class StudentController extends Controller
{
    //
    public function index(){
        $students = Student::all();

        $data = [
            'message' => 'Get all student',
            'data' => $students
        ];

        return response()->json($data, 200);
    }

    public function store(Request $request){
        $input = [
            'nama' => $request->nama,
            'nim' => $request->nim,
            'email' => $request->email,
            'jurusan' => $request->jurusan,
        ];

        $student = Student::create($input);

        $data = [
            'message' => 'Student is created succesfully',
            'data' => $student,
        ];

        return response()->json($data, 201);
    }

    public function update(Request $request, $id){
        $student = Student::find($id);

        $input = [
            'nama' => $request->nama,
            'nim' => $request->nim,
            'email' => $request->email,
            'jurusan' => $request->jurusan,
        ];

        $student->update($input);

        $data = [
            'message' => 'Student is update succesfully',
            'data' => $student,
        ];

        return response()->json($data, 201);
    }

    public function delete($id){
        $student = Student::find($id);

        $student->delete();

        $data = [
            'message' => 'Student is delete succesfully',
            'data' => $student,
        ];

        return response()->json($data, 201);
    }
}
