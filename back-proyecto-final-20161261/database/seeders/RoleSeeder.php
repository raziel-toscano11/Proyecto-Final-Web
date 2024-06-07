<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Spatie\Permission\Models\Permission;

class RoleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        /*$user = User::create([
            'name' => 'Raziel Martinez', 
            'email' => 'admin@gmail.com',
            'password' => bcrypt('password')
        ]);
        
        $role = Role::create(['name' => 'Admin']);
         
        $permissions = Permission::pluck('id','id')->all();
       
        $role->syncPermissions($permissions);
         
        $user->assignRole([$role->id]);*/
        
        #Roles
        $administrador = Role::create(['name' => 'Admin']);
        $usuario = Role::create(['name' => 'Usuario']);
    }
}
