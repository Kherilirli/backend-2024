<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;
use Illuminate\Support\Facades\Validator;
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

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'nama' => 'required',
            'nim' => 'numeric|required',
            'email' => 'email|required',
            'jurusan' => 'required',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validation errors',
                'errors' => $validator->errors()
            ], 422);
        }

        $student = Student::create($request->all());

        $data = [
            'message' => 'Student is created successfully',
            'data' => $student,
        ];

        return response()->json($data, 201);
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
