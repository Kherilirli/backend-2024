<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;
use Pest\Mutate\Mutators\Sets\ReturnSet;
use Symfony\Contracts\Service\Attribute\Required;

class StudentController extends Controller
{
    //
    public function index(){
        $students = Student::all();

        if ($students->isEmpty()) {
            $data = [
                'message' => 'Student not found'
            ];

            return response()->json($data, 404);
        } else {
            $data = [
                'message' => 'Get all student',
                'data' => $students
            ];
            
            return response()->json($data,200);
        }
    }

    public function store(Request $request){
        $request->validate([
            'nama' => 'required|string|max:255',
            'nim' => 'required|string|max:255|unique:students,',
            'email' => 'required|email|unique:students,',
            'jurusan' => 'required|string|max:255',
        ]);

        $input = [
            'nama' => $request->nama,
            'nim' => $request->nim,
            'email' => $request->email,
            'jurusan' => $request->jurusan
        ];

        $student = Student::create($input);

        $data = [
            'message' => 'Student is created succesfully',
            'data' => [$student],
        ];

        return response()->json($data, 200);
    }

    public function update(Request $request, $id){
        $student = Student::find($id);

        if ($student) {
            $input = [
                'nama' => $request->nama ?? $student->nama,
                'nim' => $request->nim ?? $student->nim,
                'email' => $request->email ?? $student->email,
                'jurusan' => $request->jurusan ?? $student->jurusan,
            ];
    
            $student->update($input);
    
            $data = [
                'message' => 'Student is update succesfully',
                'data' => $student,
            ];
    
            return response()->json($data, 201);
        } else {
            $data = [
                'message' => 'Student not found'
            ];

            return response()->json($data,404);
        }
    }

    public function delete($id){
        $student = Student::find($id);

        if ($student) {
            $student->delete();

            $data = [
                'message' => 'Student is delete succesfully',
                'data' => $student,
            ];

            return response()->json($data, 201);
        } else {
            $data = [
                'message' => 'Student not found'
            ];

            return response()->json($data, 404);
        }
    }

    public function show($id){
        $student = Student::find($id);

        if ($student) {
            $data = [
                'message' => 'Get detail student',
                'data' => $student,
            ];

            return response()->json($data,200);
        } else {
            $data = [
                'message' => 'Student not found',
            ];
            return response()->json($data,404);
        }
    }
}
