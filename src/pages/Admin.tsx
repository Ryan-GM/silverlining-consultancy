
import React, { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { User } from '@supabase/supabase-js';
import { LogOut, Mail, Building, Calendar, MessageSquare } from 'lucide-react';

interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
  status: 'new' | 'in_progress' | 'resolved';
  admin_notes: string;
  created_at: string;
  updated_at: string;
}

const Admin = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedSubmission, setSelectedSubmission] = useState<ContactSubmission | null>(null);
  const [adminNotes, setAdminNotes] = useState('');
  const [status, setStatus] = useState<'new' | 'in_progress' | 'resolved'>('new');
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session?.user) {
        navigate('/auth');
        return;
      }

      setUser(session.user);
      
      // Check if user is admin
      const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', session.user.id)
        .single();

      if (profile?.role !== 'admin') {
        toast({
          title: "Access denied",
          description: "You need admin privileges to access this page.",
          variant: "destructive",
        });
        navigate('/auth');
        return;
      }

      setIsAdmin(true);
      loadSubmissions();
    };

    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (!session?.user) {
        navigate('/auth');
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate, toast]);

  const loadSubmissions = async () => {
    try {
      const { data, error } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      
      setSubmissions(data || []);
    } catch (error: any) {
      toast({
        title: "Error loading submissions",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    navigate('/auth');
  };

  const updateSubmission = async () => {
    if (!selectedSubmission) return;

    try {
      const { error } = await supabase
        .from('contact_submissions')
        .update({
          status,
          admin_notes: adminNotes,
          updated_at: new Date().toISOString()
        })
        .eq('id', selectedSubmission.id);

      if (error) throw error;

      toast({
        title: "Submission updated",
        description: "The contact submission has been updated successfully.",
      });

      setSelectedSubmission(null);
      loadSubmissions();
    } catch (error: any) {
      toast({
        title: "Error updating submission",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-blue-500';
      case 'in_progress': return 'bg-yellow-500';
      case 'resolved': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading admin dashboard...</p>
        </div>
      </div>
    );
  }

  if (!isAdmin) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <h1 className="text-2xl font-serif font-bold text-primary">Contact Submissions</h1>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome, {user?.email}</span>
              <Button variant="outline" onClick={handleSignOut}>
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Submissions List */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  Contact Submissions
                  <Badge variant="secondary">{submissions.length} total</Badge>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {submissions.length === 0 ? (
                    <p className="text-center text-gray-500 py-8">No contact submissions yet.</p>
                  ) : (
                    submissions.map((submission) => (
                      <div
                        key={submission.id}
                        className="border rounded-lg p-4 hover:bg-gray-50 cursor-pointer transition-colors"
                        onClick={() => {
                          setSelectedSubmission(submission);
                          setAdminNotes(submission.admin_notes || '');
                          setStatus(submission.status);
                        }}
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex items-center space-x-3">
                            <h3 className="font-semibold text-gray-900">{submission.name}</h3>
                            <Badge className={getStatusColor(submission.status)}>
                              {submission.status.replace('_', ' ')}
                            </Badge>
                          </div>
                          <span className="text-sm text-gray-500">
                            {new Date(submission.created_at).toLocaleDateString()}
                          </span>
                        </div>
                        
                        <div className="grid grid-cols-2 gap-4 text-sm text-gray-600 mb-2">
                          <div className="flex items-center">
                            <Mail className="w-4 h-4 mr-2" />
                            {submission.email}
                          </div>
                          <div className="flex items-center">
                            <Building className="w-4 h-4 mr-2" />
                            {submission.company || 'N/A'}
                          </div>
                        </div>
                        
                        <div className="text-sm text-gray-600 mb-2">
                          <strong>Service:</strong> {submission.service}
                        </div>
                        
                        <p className="text-sm text-gray-700 line-clamp-2">
                          {submission.message}
                        </p>
                      </div>
                    ))
                  )}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Submission Details */}
          <div>
            {selectedSubmission ? (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageSquare className="w-5 h-5 mr-2" />
                    Submission Details
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-lg">{selectedSubmission.name}</h3>
                    <p className="text-gray-600">{selectedSubmission.email}</p>
                    {selectedSubmission.company && (
                      <p className="text-gray-600">{selectedSubmission.company}</p>
                    )}
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-gray-700">Service</Label>
                    <p className="text-sm">{selectedSubmission.service}</p>
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-gray-700">Message</Label>
                    <p className="text-sm bg-gray-50 p-3 rounded border">
                      {selectedSubmission.message}
                    </p>
                  </div>

                  <div>
                    <Label className="text-sm font-medium text-gray-700">Date</Label>
                    <p className="text-sm flex items-center">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(selectedSubmission.created_at).toLocaleString()}
                    </p>
                  </div>

                  <div>
                    <Label htmlFor="status">Status</Label>
                    <Select value={status} onValueChange={(value: any) => setStatus(value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="new">New</SelectItem>
                        <SelectItem value="in_progress">In Progress</SelectItem>
                        <SelectItem value="resolved">Resolved</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="admin-notes">Admin Notes</Label>
                    <Textarea
                      id="admin-notes"
                      value={adminNotes}
                      onChange={(e) => setAdminNotes(e.target.value)}
                      placeholder="Add internal notes about this submission..."
                      rows={4}
                    />
                  </div>

                  <div className="flex space-x-2">
                    <Button onClick={updateSubmission} className="flex-1">
                      Update Submission
                    </Button>
                    <Button 
                      variant="outline" 
                      onClick={() => setSelectedSubmission(null)}
                      className="flex-1"
                    >
                      Close
                    </Button>
                  </div>

                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      const mailtoLink = `mailto:${selectedSubmission.email}?subject=Re: ${selectedSubmission.service} Inquiry&body=Dear ${selectedSubmission.name},%0D%0A%0D%0AThank you for your inquiry about ${selectedSubmission.service}.%0D%0A%0D%0ABest regards,%0D%0ASilverlining Consulting Limited`;
                      window.open(mailtoLink, '_blank');
                    }}
                  >
                    <Mail className="w-4 h-4 mr-2" />
                    Reply via Email
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Card>
                <CardContent className="text-center py-12">
                  <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">Select a submission to view details</p>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Admin;
