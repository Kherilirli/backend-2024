<?php

namespace App\Http\Controllers;

use App\Models\Pegawai;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class PegawaiController extends Controller
{
    //
    public function index() {
        $employees = Pegawai::all();

        if ($employees->isEmpty()) {
            $data = [
                'message' => 'Data is Empty'
            ];

            return response()->json($data, 200);
        } else {
            $data = [
                'message' => 'Get all Resource',
                'data' => $employees
            ];

            return response()->json($data, 200);
        }
    }

    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'name' => 'required',
            'gender' => 'required|in:Laki-laki,Perempuan', 
            'phone' => 'required|numeric',
            'address' => 'required',
            'email' => 'required|email',
            'status' => 'required',
            'hired_on' => 'required|date',
        ]);

        if ($validator->fails()) {
            return response()->json([
                'message' => 'Validation errors',
                'errors' => $validator->errors()
            ], 422);
        }

        $employee = Pegawai::create($request->all());

        $data = [
            'message' => 'Resource is added successfully',
            'data' => $employee,
        ];

        return response()->json($data, 201);
    }

    public function update(Request $request, $id) {
        $employee = Pegawai::find($id);

        if ($employee) {
            $validator = Validator::make($request->all(), [
                'name' => 'sometimes|required',
                'gender' => 'sometimes|required|in:Laki-laki,Perempuan',
                'phone' => 'sometimes|required|numeric',
                'address' => 'sometimes|required',
                'email' => 'sometimes|required|email',
                'status' => 'sometimes|required',
                'hired_on' => 'sometimes|required|date',
            ]);

            if ($validator->fails()) {
                return response()->json([
                    'message' => 'Validation errors',
                    'errors' => $validator->errors(),
                ], 422);
            }

            $input = [
                'name' => $request->name ?? $employee->name,
                'gender' => $request->gender ?? $employee->gender,
                'phone' => $request->phone ?? $employee->phone,
                'address' => $request->address ?? $employee->address,
                'email' => $request->email ?? $employee->email,
                'status' => $request->status ?? $employee->status,
                'hired_on' => $request->hired_on ?? $employee->hired_on,
            ];

            $employee->update($input);

            $data = [
                'message' => 'Resource is updated successfully',
                'data' => $employee,
            ];

            return response()->json($data, 200);
        } else {
            $data = [
                'message' => 'Resource not found',
            ];

            return response()->json($data, 404);
        }
    }
    
    public function delete($id) {
        $employee = Pegawai::find($id);

        if ($employee) {
            $employee->delete();

            $data = [
                'message' => 'Resource is delete successfully',
                'data' => $employee
            ];

            return response()->json($data, 200);
        } else {
            $data = [
                'message' => 'Resource not found'
            ];

            return response()->json($data, 404);
        }
    }

    public function show($id)
    {
        $employee = Pegawai::find($id);

        if ($employee) {
            $data = [
                'message' => 'Get detail Resource',
                'data' => $employee,
            ];

            return response()->json($data, 200);
        } else {
            $data = [
                'message' => 'Resource not Found',
            ];

            return response()->json($data, 404);
        }
    }

    public function searchByName(Request $request) {
        $name = $request->input('name');
        $resources = Pegawai::where('name', 'like', '%' . $name . '%')->get();

        if ($resources->isEmpty()) {
            $data = [

            ];
            return response()->json($data, 404);
        } else {
            $data = [
                'message' => 'Get searched resource',
                'data' => $resources,
            ];

            return response()->json($data, 200);
        }
    }

    public function getActiveResources()
    {
        $activeResources = Pegawai::where('status', 'active')->get();

        if ($activeResources->isEmpty()) {
            return response()->json([
                'message' => 'Resource not found'
            ], 404);
        }

        return response()->json([
            'message' => 'Get active resource',
            'total' => $activeResources->count(),
            'data' => $activeResources
        ], 200);
    }
    
    public function getInactiveResources()
    {
        $inactiveResources = Pegawai::where('status', 'inactive')->get();

        if ($inactiveResources->isEmpty()) {
            $data = [
                'message' => 'Resource not found'
            ];

            return response()->json($data, 404);
        } else {
            $data = [
                'message' => 'Get inactive resource',
                'total' => $inactiveResources->count(),
                'data' => $inactiveResources
            ];

            return response()->json($data,200);
        }
    }

    public function getTerminatedResources()
    {
        $terminatedResources = Pegawai::where('status', 'terminated')->get();

        if ($terminatedResources->isEmpty()) {
            $data = [
                'message' => 'Resource not found'
            ];

            return response()->json($data, 404);
        } else {
            $data = [
                'message' => 'Get terminated resource',
                'total' => $terminatedResources->count(),
                'data' => $terminatedResources
            ];

            return response()->json($data,200);
        }
    }
}
